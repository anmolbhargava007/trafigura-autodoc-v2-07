
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SearchInput from './search/SearchInput';
import SearchHelperBadges from './search/SearchHelperBadges';
import SearchHelperInputs from './search/SearchHelperInputs';
import SearchFilterPopover from './search/SearchFilterPopover';

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    documentType: 'all',
    dateRange: 'any',
    department: 'all',
    includeArchived: false,
  });
  const [searchMode, setSearchMode] = useState('standard');
  const [calculationType, setCalculationType] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [nestedQuery, setNestedQuery] = useState('');
  const [activeSearchHelpers, setActiveSearchHelpers] = useState<string[]>([]);

  const updateFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let finalQuery = query;
    
    // Append calculation request if active
    if (activeSearchHelpers.includes('calculation') && calculationType) {
      finalQuery += ` calculate ${calculationType}`;
    }
    
    // Append time frame if active
    if (activeSearchHelpers.includes('timeframe') && timeFrame) {
      finalQuery += ` within ${timeFrame}`;
    }
    
    // Append nested query if active
    if (activeSearchHelpers.includes('nested') && nestedQuery) {
      finalQuery += ` that contain ${nestedQuery}`;
    }
    
    onSearch(finalQuery, filters);
  };
  
  const toggleSearchHelper = (helper: string) => {
    if (activeSearchHelpers.includes(helper)) {
      setActiveSearchHelpers(activeSearchHelpers.filter(h => h !== helper));
    } else {
      setActiveSearchHelpers([...activeSearchHelpers, helper]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col gap-2">
          <SearchInput 
            value={query}
            onChange={setQuery}
          />
          
          <SearchHelperBadges 
            activeHelpers={activeSearchHelpers}
            toggleHelper={toggleSearchHelper}
          />
          
          <SearchHelperInputs 
            activeHelpers={activeSearchHelpers}
            calculationType={calculationType}
            setCalculationType={setCalculationType}
            timeFrame={timeFrame}
            setTimeFrame={setTimeFrame}
            nestedQuery={nestedQuery}
            setNestedQuery={setNestedQuery}
          />
          
          <div className="flex items-center justify-end gap-2 mt-2">
            <SearchFilterPopover 
              filters={filters}
              updateFilter={updateFilter}
              searchMode={searchMode}
              setSearchMode={setSearchMode}
            />
            
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-trafigura-dark-blue to-trafigura-light-blue hover:opacity-90 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
