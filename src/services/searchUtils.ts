
import { SearchResultItem } from '@/components/SearchResults';

// Helper function to extract text content from a document for searching
const getSearchableContent = (item: SearchResultItem): string => {
  const textParts: string[] = [
    item.title || '',
    item.author || '',
    ...(item.tags || []),
  ];
  
  // Add content from new format if available
  if (item.content && item.content.length > 0) {
    if (item.content[0].Document_Summary) {
      textParts.push(item.content[0].Document_Summary);
    }
    if (item.content[0].Content) {
      textParts.push(item.content[0].Content);
    }
    if (item.content[0].Document_Details) {
      const details = item.content[0].Document_Details;
      if (details.Type) textParts.push(details.Type);
      if (details.Department) textParts.push(details.Department);
    }
  } else {
    // Add content from old format if available
    if (item.excerpt) textParts.push(item.excerpt);
    if (item.summary) textParts.push(item.summary);
    if (item.contentPreview) textParts.push(item.contentPreview);
    if (item.department) textParts.push(item.department);
    if (item.type) textParts.push(item.type);
  }
  
  return textParts.join(' ').toLowerCase();
};

// Parse date from various formats
const parseDate = (dateStr: string): Date | null => {
  // Try to parse common date formats
  const formats = [
    // ISO format (2023-10-23)
    /(\d{4})-(\d{2})-(\d{2})/,
    // DD/MM/YYYY
    /(\d{2})\/(\d{2})\/(\d{4})/,
    // MM/DD/YYYY
    /(\d{2})\/(\d{2})\/(\d{4})/,
  ];
  
  for (const format of formats) {
    const match = dateStr.match(format);
    if (match) {
      try {
        return new Date(dateStr);
      } catch (e) {
        console.error("Failed to parse date:", dateStr);
      }
    }
  }
  
  return null;
};

// Check if a date is within a specified range
const isDateInRange = (date: Date, fromDate: Date, toDate: Date): boolean => {
  return date >= fromDate && date <= toDate;
};

// Function to perform keyword-based search with improved relevance
export const performKeywordSearch = (
  items: SearchResultItem[],
  query: string,
  fields: string[] = ['title', 'tags', 'content']
): SearchResultItem[] => {
  console.log(`Running keyword search with query: "${query}" on ${items.length} items`);
  
  if (!query || query.trim() === '') {
    console.log('Empty query, returning all items');
    return items;
  }

  const normalizedQuery = query.trim().toLowerCase();
  
  // Handle special date range queries
  if (normalizedQuery.includes('between') && normalizedQuery.includes('and')) {
    // Try to extract date range: "between [date1] and [date2]"
    const datePattern = /between\s+(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})\s+and\s+(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/i;
    const dateMatch = normalizedQuery.match(datePattern);
    
    if (dateMatch && dateMatch.length >= 3) {
      const fromDateStr = dateMatch[1];
      const toDateStr = dateMatch[2];
      
      console.log(`Detected date range query: from ${fromDateStr} to ${toDateStr}`);
      
      const fromDate = parseDate(fromDateStr);
      const toDate = parseDate(toDateStr);
      
      if (fromDate && toDate) {
        console.log(`Parsed dates: from ${fromDate} to ${toDate}`);
        
        // Filter items by date range
        return items.filter(item => {
          const itemDate = new Date(item.date);
          return isDateInRange(itemDate, fromDate, toDate);
        });
      }
    }
  }
  
  // Split query into terms for regular search
  const queryTerms = normalizedQuery.split(/\s+/);
  console.log(`Normalized query: "${normalizedQuery}", terms:`, queryTerms);
  
  // Check if we need to do exact type matching
  const documentTypes = ['contract', 'invoice', 'agreement', 'policy', 'report', 'research'];
  const isDocumentTypeSearch = documentTypes.some(type => normalizedQuery.includes(type));
  
  // Find matching items
  const matchedItems = items.filter(item => {
    const searchableContent = getSearchableContent(item);
    
    // For document type searches, check the type field specifically
    if (isDocumentTypeSearch) {
      const itemType = item.type || 
        (item.content && item.content[0]?.Document_Details?.Type?.toLowerCase());
      
      if (itemType && documentTypes.some(type => 
        normalizedQuery.includes(type) && itemType.includes(type)
      )) {
        return true;
      }
    }
    
    // Check if all query terms are present in the searchable content
    const allTermsMatch = queryTerms.every(term => {
      if (term.length < 3) return true; // Skip very short terms
      return searchableContent.includes(term);
    });
    
    // Check for company name matches (trafigura, msc)
    const hasTrafiguraMatch = normalizedQuery.includes('trafigura') && 
      (searchableContent.includes('trafigura') || item.author?.toLowerCase().includes('trafigura'));
      
    const hasMscMatch = normalizedQuery.includes('msc') && 
      (searchableContent.includes('msc') || item.tags?.some(tag => tag.toLowerCase() === 'msc'));
    
    return allTermsMatch || hasTrafiguraMatch || hasMscMatch;
  });
  
  console.log(`Found ${matchedItems.length} matches out of ${items.length} items`);
  
  // Calculate relevance scores for sorting
  const scoredItems = matchedItems.map(item => {
    let score = 0;
    const searchableContent = getSearchableContent(item);
    
    // Score based on title match
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
    
    // Score based on tag matches
    const tagMatches = item.tags?.filter(tag => 
      queryTerms.some(term => tag.toLowerCase().includes(term))
    ).length || 0;
    score += tagMatches * 5;
    
    // Score based on content match
    queryTerms.forEach(term => {
      if (term.length >= 3 && searchableContent.includes(term)) {
        score += 2;
      }
    });
    
    // Score based on document type match
    if (isDocumentTypeSearch) {
      const itemType = item.type || 
        (item.content && item.content[0]?.Document_Details?.Type?.toLowerCase());
        
      if (itemType && documentTypes.some(type => 
        normalizedQuery.includes(type) && itemType === type
      )) {
        score += 15;
      }
    }
    
    // Score based on company name matches
    if (normalizedQuery.includes('trafigura') && 
        (searchableContent.includes('trafigura') || item.author?.toLowerCase().includes('trafigura'))) {
      score += 8;
    }
    
    if (normalizedQuery.includes('msc') && 
        (searchableContent.includes('msc') || item.tags?.some(tag => tag.toLowerCase() === 'msc'))) {
      score += 8;
    }
    
    console.log(`Item ${item.id} has score ${score}`);
    return { item, score };
  });
  
  // Sort by score (highest first)
  const sortedResults = scoredItems
    .sort((a, b) => b.score - a.score)
    .map(scoredItem => scoredItem.item);
  
  console.log(`Returning ${sortedResults.length} sorted results`);
  return sortedResults;
};

// Function to generate a unique ID for documents
export const generateDocumentId = (prefix: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}-${timestamp}-${random}`;
};
