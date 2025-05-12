
import React, { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Personas from '@/components/Personas';
import SearchResults, { SearchResultItem } from '@/components/SearchResults';
import FilterPane from '@/components/FilterPane';
import { searchDocuments } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import { DateRange } from 'react-day-picker';

const Index = () => {
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPersona, setCurrentPersona] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();
  
  const [filters, setFilters] = useState({
    documentType: '',  // Changed from [] to '' to match the API expectation
    department: '',    // Changed from [] to '' to match the API expectation
    confidentiality: [],
    fileSize: [],
    dateRange: { from: undefined, to: undefined } as DateRange
  });

  const handleSearch = async (query: string, searchFilters: any) => {
    try {
      console.log('Search initiated with query:', query);
      setSearchQuery(query);
      setLoading(true);
      
      // Combine sidebar filters with search bar filters
      const combinedFilters = {
        ...filters,
        ...searchFilters,
        documentType: searchFilters.documentType || filters.documentType,
        department: searchFilters.department || filters.department
      };
      
      console.log('Combined filters:', combinedFilters);
      
      const searchResults = await searchDocuments(query, combinedFilters, currentPersona);
      console.log(`Search completed, found ${searchResults.length} results`);
      
      setResults(searchResults);
      setSearchPerformed(true);
      setShowFilters(true);
      
      toast({
        title: "Search completed",
        description: `Found ${searchResults.length} results for your query.`,
        duration: 3000,
      });
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePersonaChange = (persona: string) => {
    setCurrentPersona(persona);
    
    // If a search has already been performed, redo it with the new persona
    if (searchPerformed) {
      // Redoing the search with current query and updated persona
      setLoading(true);
      
      searchDocuments(searchQuery, filters, persona)
        .then(newResults => {
          setResults(newResults);
          setLoading(false);
          
          toast({
            title: "Persona changed",
            description: `Viewing results for ${persona === 'all' ? 'all users' : persona + ' users'}.`,
            duration: 3000,
          });
        })
        .catch(error => {
          console.error('Error updating persona results:', error);
          setLoading(false);
        });
    }
  };
  
  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    
    if (searchPerformed) {
      // Redoing the search with current query and updated filters
      setLoading(true);
      
      searchDocuments(searchQuery, newFilters, currentPersona)
        .then(newResults => {
          setResults(newResults);
          setLoading(false);
          
          toast({
            title: "Filters applied",
            description: `Search results updated with new filters.`,
            duration: 2000,
          });
        })
        .catch(error => {
          console.error('Error updating filtered results:', error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-trafigura-gray font-poppins">
      <Header />
      
      <main className="flex-1 flex">
        {showFilters && (
          <aside className="h-[calc(100vh-4rem)] sticky top-16">
            <FilterPane 
              onFiltersChange={handleFiltersChange} 
              filters={filters}
            />
          </aside>
        )}
        
        <div className="flex-1 px-4 py-6">
          <div className={`flex flex-col items-center ${!searchPerformed ? 'justify-center min-h-[calc(100vh-4rem)]' : ''}`}>
            {!searchPerformed && (
              <div className="mb-8 text-center">
                <img 
                  src="logo.png" 
                  alt="Trafigura" 
                  className="h-10 mx-auto mb-6" 
                />
                <p className="text-gray-600 max-w-md mx-auto">
                  Unified search across all Trafigura enterprise knowledge sources
                </p>
              </div>
            )}
            
            <SearchBar onSearch={handleSearch} />
            
            {(searchPerformed || loading) && (
              <Personas 
                currentPersona={currentPersona} 
                onPersonaChange={handlePersonaChange} 
              />
            )}
            
            <SearchResults 
              results={results} 
              loading={loading} 
              searchPerformed={searchPerformed}
              query={searchQuery}
            />
          </div>
        </div>
      </main>
      
      {!searchPerformed && (
        <footer className="text-center py-4 text-sm text-gray-500">
          <p>© 2024 Trafigura Group • Enterprise Knowledge Search</p>
        </footer>
      )}
    </div>
  );
};

export default Index;
