
import React, { useState } from 'react';
import { 
  File, 
  FileText, 
  FileClock, 
  FileCheck, 
  ExternalLink, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Calculator
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { getPdfUrlByFilename } from '@/services/api';

export interface SearchResultItem {
  id: string;
  title: string;
  excerpt?: string;
  type?: 'contract' | 'agreement' | 'report' | 'research' | 'policy' | 'invoice';
  department?: string;
  date: string;
  confidential?: boolean;
  tags: string[];
  summary?: string;
  contentPreview?: string;
  fileSize?: string;
  author?: string;
  lastModified?: string;
  pdfUrl?: string;
  pdf_file?: string;
  size?: string;
  content?: Array<{
    Document_Summary?: string;
    Content?: string;
    Date_Information?: {
      Created?: string;
      Modified?: string;
    };
    Document_Details?: {
      Type?: string;
      Department?: string;
      Size?: string;
    };
  }>;
  Calculated_Values?: {
    [key: string]: string;
  };
  query?: string;
  answer?: SearchResultItem[];
  calculations?: Array<{
    type: string;
    value: string;
    description: string;
  }>;
}

interface SearchResultsProps {
  results: SearchResultItem[];
  loading: boolean;
  searchPerformed: boolean;
  query?: string;
}

const getDocumentIcon = (type: string) => {
  switch (type) {
    case 'contract':
      return <FileCheck className="h-5 w-5 text-trafigura-dark-blue" />;
    case 'agreement':
      return <FileText className="h-5 w-5 text-green-600" />;
    case 'report':
      return <FileClock className="h-5 w-5 text-amber-600" />;
    case 'policy':
      return <File className="h-5 w-5 text-red-600" />;
    default:
      return <File className="h-5 w-5 text-gray-600" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const SearchResults: React.FC<SearchResultsProps> = ({ 
  results, 
  loading,
  searchPerformed,
  query
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItemExpansion = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleDownload = (item: SearchResultItem) => {
    if (item.pdf_file) {
      try {
        // Get the PDF URL from the api service
        const pdfUrl = getPdfUrlByFilename(item.pdf_file);
        
        // Create a blob from the PDF URL and download it
        fetch(pdfUrl)
          .then(response => response.blob())
          .then(blob => {
            // Create a blob URL for the file
            const blobUrl = window.URL.createObjectURL(blob);
            
            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = item.pdf_file;
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
            
            toast({
              title: "Download started",
              description: `Downloading ${item.title}`,
              duration: 3000,
            });
          })
          .catch(error => {
            console.error("Download error:", error);
            toast({
              title: "Download failed",
              description: "Could not download the document. Please try again.",
              variant: "destructive",
              duration: 3000,
            });
          });
      } catch (error) {
        toast({
          title: "Download failed",
          description: "Could not download the document. The file may not exist.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } else {
      toast({
        title: "File not available",
        description: "No downloadable file is associated with this document.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleOpenDocument = (item: SearchResultItem) => {
    if (item.pdf_file) {
      try {
        // Get the PDF URL from the api service
        const pdfUrl = getPdfUrlByFilename(item.pdf_file);
        
        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
      } catch (error) {
        toast({
          title: "Document unavailable",
          description: "This document cannot be viewed at this time. The file may not exist.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } else {
      toast({
        title: "Document unavailable",
        description: "No viewable document is associated with this entry.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-8 text-center">
        <div className="animate-pulse flex flex-col space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-24 bg-gray-100 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0 && searchPerformed) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-8 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
        <p className="text-gray-500">
          Try adjusting your search terms or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  if (!searchPerformed) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 font-poppins">
      <p className="text-sm text-gray-500 mb-4">{results.length} results found {query && `for "${query}"`}</p>
      
      <div className="space-y-4">
        {results.map((result) => {
          // Extract document details from new format if available
          const documentType = result.type || 
            (result.content && result.content[0]?.Document_Details?.Type?.toLowerCase()) || 
            'file';
          
          const department = result.department || 
            (result.content && result.content[0]?.Document_Details?.Department) || 
            '';
          
          const fileSize = result.fileSize || result.size || 
            (result.content && result.content[0]?.Document_Details?.Size) || 
            '';
          
          const summary = result.summary || 
            (result.content && result.content[0]?.Document_Summary) || 
            '';
          
          const contentPreview = result.contentPreview || 
            (result.content && result.content[0]?.Content) || 
            '';
          
          const lastModified = result.lastModified || 
            (result.content && result.content[0]?.Date_Information?.Modified) || 
            '';
          
          // Prepare calculations from new format if available
          let calculations = [];
          if (result.calculations) {
            calculations = result.calculations;
          } else if (result.Calculated_Values) {
            calculations = Object.entries(result.Calculated_Values).map(([key, value]) => ({
              type: 'sum',
              value,
              description: key.split('_').join(' ')
            }));
          }

          // Generate excerpt if not available
          const excerpt = result.excerpt || summary || 
            `${documentType.charAt(0).toUpperCase() + documentType.slice(1)} related to ${result.tags.join(', ')}`;
          
          return (
            <div 
              key={result.id} 
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 animate-fade-in bg-white"
            >
              <div className="flex items-start gap-3">
                <div>
                  {getDocumentIcon(documentType)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-lg text-trafigura-dark-blue">
                      {result.title}
                    </h3>
                    {result.confidential && (
                      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                        Confidential
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
                    <Badge variant="secondary" className="capitalize">
                      {documentType}
                    </Badge>
                    {department && (
                      <>
                        <span>•</span>
                        <span>{department}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{formatDate(result.date)}</span>
                    {fileSize && (
                      <>
                        <span>•</span>
                        <span>{fileSize}</span>
                      </>
                    )}
                    {result.author && (
                      <>
                        <span>•</span>
                        <span>By {result.author}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {result.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Collapsible 
                    open={expandedItems[result.id]} 
                    onOpenChange={() => toggleItemExpansion(result.id)}
                    className="mt-2"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => handleDownload(result)}
                        >
                          <Download className="h-3 w-3 mr-1" /> 
                          Download
                        </Button>
                        
                        <Button 
                          size="sm" 
                          className="text-xs bg-trafigura-dark-blue hover:bg-trafigura-dark-blue/90 rounded-full"
                          onClick={() => handleOpenDocument(result)}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Open
                        </Button>
                      </div>
                      
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0 h-8 px-2 hover:bg-blue-50 hover:text-blue-600">
                          <span className="mr-1 text-xs">
                            {expandedItems[result.id] ? 'Hide details' : 'Show details'}
                          </span>
                          {expandedItems[result.id] ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <Separator className="my-3" />
                      
                      {summary && (
                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-1">Document Summary</h4>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                            {summary}
                          </p>
                        </div>
                      )}
                      
                      {calculations && calculations.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-1 flex items-center">
                            <Calculator className="h-4 w-4 mr-1" /> Calculated Values
                          </h4>
                          <div className="bg-gray-50 p-3 rounded-md">
                            {calculations.map((calc, idx) => (
                              <div key={idx} className="flex justify-between text-sm py-1">
                                <span className="text-gray-600">{calc.description}</span>
                                <span className="font-medium">{calc.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {contentPreview && (
                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-1">Content Preview</h4>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md max-h-48 overflow-y-auto">
                            {contentPreview}
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-sm mb-1 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> Date Information
                          </h4>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="grid grid-cols-2 gap-y-2">
                              <span className="text-gray-600">Created:</span>
                              <span>{formatDate(result.date)}</span>
                              {lastModified && (
                                <>
                                  <span className="text-gray-600">Modified:</span>
                                  <span>{formatDate(lastModified)}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-1">Document Details</h4>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="grid grid-cols-2 gap-y-2">
                              <span className="text-gray-600">Type:</span>
                              <span className="capitalize">{documentType}</span>
                              {department && (
                                <>
                                  <span className="text-gray-600">Department:</span>
                                  <span>{department}</span>
                                </>
                              )}
                              {fileSize && (
                                <>
                                  <span className="text-gray-600">Size:</span>
                                  <span>{fileSize}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
