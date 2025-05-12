
import { SearchResultItem } from '@/components/SearchResults';

// Function to perform keyword-based search with improved relevance
export const performKeywordSearch = (
  items: SearchResultItem[],
  query: string,
  fields: string[] = ['title', 'excerpt', 'tags', 'type']
): SearchResultItem[] => {
  console.log(`Running keyword search with query: "${query}" on ${items.length} items`);
  
  if (!query || query.trim() === '') {
    console.log('Empty query, returning all items');
    return items;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const queryTerms = normalizedQuery.split(/\s+/);
  
  console.log(`Normalized query: "${normalizedQuery}", terms:`, queryTerms);
  
  // First, check if we need to do exact type matching (contract, agreement, etc.)
  const documentTypes = ['contract', 'agreement', 'policy', 'report', 'research'];
  const isDocumentTypeSearch = documentTypes.includes(normalizedQuery);
  
  if (isDocumentTypeSearch) {
    console.log(`Document type search detected for: ${normalizedQuery}`);
    
    // Filter for exact type matches
    const typeMatches = items.filter(item => 
      item.type.toLowerCase() === normalizedQuery
    );
    
    console.log(`Found ${typeMatches.length} exact type matches`);
    return typeMatches;
  }
  
  // For other searches, we use our regular matching logic
  const matchedItems = items.filter(item => {
    // Check for exact matches in various fields
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
    const typeMatch = item.type.toLowerCase() === normalizedQuery;
    const excerptMatch = item.excerpt.toLowerCase().includes(normalizedQuery);
    const departmentMatch = item.department.toLowerCase() === normalizedQuery;
    const tagMatch = item.tags.some(tag => tag.toLowerCase() === normalizedQuery);
    const idMatch = item.id.toLowerCase() === normalizedQuery;
    const contentMatch = item.contentPreview && item.contentPreview.toLowerCase().includes(normalizedQuery);
    
    // For multi-word queries, check if all terms match exactly
    const allTermsMatch = queryTerms.length > 1 && queryTerms.every(term => {
      if (term.length < 3) return true; // Skip very short terms
      
      return (
        item.title.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.department.toLowerCase().includes(term) ||
        item.excerpt.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term)) ||
        item.id.toLowerCase().includes(term) ||
        (item.contentPreview && item.contentPreview.toLowerCase().includes(term))
      );
    });
    
    const isMatch = titleMatch || typeMatch || excerptMatch || departmentMatch || tagMatch || idMatch || contentMatch || allTermsMatch;
    
    if (isMatch) {
      console.log(`Match found for item: ${item.id} - ${item.title}`);
    }
    
    // Return true if any field exactly matches the search term
    return isMatch;
  });
  
  console.log(`Found ${matchedItems.length} matches out of ${items.length} items`);
  
  // Calculate relevance score for sorting
  const scoredItems = matchedItems.map(item => {
    let score = 0;
    
    // Check for exact matches in title (highest priority)
    if (item.title.toLowerCase() === normalizedQuery) {
      score += 15;
    } else if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
    
    // Check for exact matches in type (high priority)
    if (item.type.toLowerCase() === normalizedQuery) {
      score += 12;
    } else if (item.type.toLowerCase().includes(normalizedQuery)) {
      score += 8;
    }
    
    // Check for exact matches in department (medium priority)
    if (item.department.toLowerCase() === normalizedQuery) {
      score += 6;
    } else if (item.department.toLowerCase().includes(normalizedQuery)) {
      score += 4;
    }
    
    // Check for exact matches in tags (medium priority)
    if (item.tags.some(tag => tag.toLowerCase() === normalizedQuery)) {
      score += 6;
    } else if (item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
      score += 4;
    }
    
    // Check for matches in excerpt (lower priority)
    if (item.excerpt.toLowerCase().includes(normalizedQuery)) {
      score += 3;
    }
    
    // Check for ID-based search
    if (item.id.toLowerCase() === normalizedQuery) {
      score += 20; // Highest priority for exact ID matches
    } else if (item.id.toLowerCase().includes(normalizedQuery)) {
      score += 15;
    }
    
    // Check for content preview matches if available
    if (item.contentPreview && item.contentPreview.toLowerCase().includes(normalizedQuery)) {
      score += 2;
    }
    
    // For multi-word queries, check if all terms are present somewhere
    const allTermsPresent = queryTerms.every(term => {
      if (term.length < 3) return true; // Skip very short terms for "all terms present" check
      
      return (
        item.title.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.department.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term)) ||
        item.excerpt.toLowerCase().includes(term) ||
        item.id.toLowerCase().includes(term) ||
        (item.contentPreview && item.contentPreview.toLowerCase().includes(term))
      );
    });
    
    if (allTermsPresent && queryTerms.length > 1) {
      score += queryTerms.length * 2;
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
