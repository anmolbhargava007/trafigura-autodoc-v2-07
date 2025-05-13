
import { SearchResultItem } from '@/components/SearchResults';
import { DateRange } from "react-day-picker";
import { performKeywordSearch } from './searchUtils';

// Updated mock data with the new format
const mockResults = [
  {
    query: "contracts between traf and msc",
    answer: [
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "trafigura", "singapore", "msc"],
        content: [
          {
            Document_Summary: "Invoice between Traf and MSC",
            Content: "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%"
        }
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%"
        }
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["oil", "contract", "trafigura", "draft"],
        content: [
          {
            Document_Summary: "Draft oil sale agreement",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05"
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%"
        }
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%"
        }
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%"
        }
      }
    ]
  },
  {
    query: "contract between 23/10/2023 and 5/12/2023",
    answer: [
      {
        id: "doc-006",
        title: "Invoice - Trafigura VR22260",
        pdf_file: "Trafigura VR#VR22260 10-20-23.pdf",
        date: "2023-12-05",
        size: "3.0MB",
        author: "Trafigura",
        tags: ["invoice", "trafigura", "december", "vr22260"],
        content: [
          {
            Document_Summary: "Invoice dated 5/12/2023 for Trafigura VR22260",
            Content: "INVOICE VR22260\nINVOICE DATE: 5/12/2023\nTRAFIGURA VR# VR22260...",
            Date_Information: {
              Created: "2023-12-05",
              Modified: "2023-12-06"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.0MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$70M",
          Ownership_structure: "60% / 40%"
        }
      },
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "october", "due november"],
        content: [
          {
            Document_Summary: "Invoice issued on 23/10/2023",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.5MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%"
        }
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "due november", "trafigura"],
        content: [
          {
            Document_Summary: "Invoice with due date in November",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Finance",
              Size: "2.6MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%"
        }
      },
      {
        id: "doc-005",
        title: "Invoice - INV178629",
        pdf_file: "Invoice_INV178629_1697739314386.pdf",
        date: "2023-10-18",
        size: "2.8MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.8MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$90M",
          Ownership_structure: "55% / 45%"
        }
      },
      {
        id: "doc-007",
        title: "Invoice - INV178631",
        pdf_file: "Invoice_INV178631_1697739461140.pdf",
        date: "2023-10-18",
        size: "2.9MB",
        author: "Trafigura Trading LLC",
        tags: ["invoice", "trafigura", "houston", "november"],
        content: [
          {
            Document_Summary: "Billing details for Trafigura Trading - INV178631",
            Content: "INVOICE\n1 of 2\nBill To:\nTrafigura Trading LLC...",
            Date_Information: {
              Created: "2023-10-18",
              Modified: "2023-11-02"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Trading",
              Size: "2.9MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$75M",
          Ownership_structure: "50% / 50%"
        }
      }
    ]
  },
  {
    query: "Show me all invoices involving Trafigura PTE LTD with shipping from Malaysia.",
    answer: [
      {
        id: "doc-002",
        title: "Invoice - DOC_MV23FW007656RRO_1_I8232012170",
        pdf_file: "DOC_MV23FW007656RRO_1_I8232012170.pdf",
        date: "2023-10-23",
        size: "2.5MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "msc", "malaysia", "shipping"],
        content: [
          {
            Document_Summary: "Invoice showing shipping from Malaysia",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012170...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "2.5MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$50M",
          Ownership_structure: "70% / 30%"
        }
      },
      {
        id: "doc-004",
        title: "Invoice - DOC_MV23FW008231RRO_1_I8232012171",
        pdf_file: "DOC_MV23FW008231RRO_1_I8232012171.pdf",
        date: "2023-10-23",
        size: "2.6MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "shipping"],
        content: [
          {
            Document_Summary: "Invoice with shipment from Malaysia",
            Content: "Invoice\nTRAFIGURA PTE.LTD\nInvoice number\n8232012171...",
            Date_Information: {
              Created: "2023-10-23",
              Modified: "2023-11-05"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Logistics",
              Size: "2.6MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$80M",
          Ownership_structure: "65% / 35%"
        }
      },
      {
        id: "doc-001",
        title: "Invoice - CHBSL3716644",
        pdf_file: "CHBSL3716644.pdf",
        date: "2023-10-03",
        size: "3.1MB",
        author: "Trafigura PTE LTD",
        tags: ["invoice", "malaysia", "trafigura", "msc"],
        content: [
          {
            Document_Summary: "Invoice between Traf and MSC with shipment details",
            Content: "038227\n1000340965\nTrafigura PTE LTD\nOcean Financial Centre...",
            Date_Information: {
              Created: "2023-10-03",
              Modified: "2023-11-01"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Legal",
              Size: "3.1MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$100M",
          Ownership_structure: "60% / 40%"
        }
      },
      {
        id: "doc-003",
        title: "Draft Crude Oil Contract",
        pdf_file: "oil_contract.pdf",
        date: "2023-09-10",
        size: "4.0MB",
        author: "ONGC",
        tags: ["contract", "malaysia", "oil", "trafigura"],
        content: [
          {
            Document_Summary: "Draft crude oil sale agreement from ONGC",
            Content: "DRAFT CRUDE OIL SALE AGREEMENT...",
            Date_Information: {
              Created: "2023-09-10",
              Modified: "2023-10-05"
            },
            Document_Details: {
              Type: "Contract",
              Department: "Operations",
              Size: "4.0MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$200M",
          Ownership_structure: "50% / 50%"
        }
      },
      {
        id: "doc-008",
        title: "Invoice - Trafigura VR22289",
        pdf_file: "Trafigura VR#22289 10-20-23.pdf",
        date: "2023-10-20",
        size: "3.2MB",
        author: "Trafigura",
        tags: ["invoice", "malaysia", "trafigura", "vr22289"],
        content: [
          {
            Document_Summary: "Invoice from Malaysia VR22289",
            Content: "INVOICE VR22289\nINVOICE DATE: 10/20/2023\nTRAFIGURA VR# VR22289...",
            Date_Information: {
              Created: "2023-10-20",
              Modified: "2023-10-21"
            },
            Document_Details: {
              Type: "Invoice",
              Department: "Shipping",
              Size: "3.2MB"
            }
          }
        ],
        Calculated_Values: {
          Total_initial_investment: "$60M",
          Ownership_structure: "55% / 45%"
        }
      }
    ]
  }
];

// Function to find an exact query match and return its answer documents
const findDocumentsByExactQuery = (query: string): SearchResultItem[] => {
  console.log(`Looking for exact query match: "${query}" in mock data`);
  
  // Find an exact query match
  const exactQueryMatch = mockResults.find(item => 
    item.query.toLowerCase() === query.toLowerCase()
  );
  
  if (exactQueryMatch) {
    console.log(`Found exact query match with ${exactQueryMatch.answer.length} documents`);
    return exactQueryMatch.answer;
  }
  
  console.log("No exact query match found");
  return [];
};

// No need to flatten all documents - we only want exact query matches
// Removing getAllDocuments function to follow new requirements

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface for search options
interface SearchOptions {
  query: string;
  filters: {
    documentType: string[];
    department: string[];
    confidentiality: string[];
    dateRange: DateRange;
    fileSize: string[];
    [key: string]: any;
  };
  persona: string;
}

// Search documents with improved search functionality
export const searchDocuments = async (
  query: string, 
  filters: any,
  persona: string
): Promise<SearchResultItem[]> => {
  console.log('Searching with:', { query, filters, persona });
  
  // Create search options object
  const searchOptions: SearchOptions = {
    query,
    filters: {
      ...filters,
      documentType: Array.isArray(filters.documentType) ? filters.documentType : [],
      department: Array.isArray(filters.department) ? filters.department : [],
      confidentiality: Array.isArray(filters.confidentiality) ? filters.confidentiality : [],
      fileSize: Array.isArray(filters.fileSize) ? filters.fileSize : [],
      dateRange: filters.dateRange || { from: undefined, to: undefined }
    },
    persona
  };
  
  console.log('Processed search options:', searchOptions);
  
  // Simulate API delay
  await delay(800);
  
  return performSearch(searchOptions);
};

// Updated search implementation to match exact queries only
const performSearch = (options: SearchOptions): SearchResultItem[] => {
  console.log(`Starting search with query: "${options.query}"`);
  
  // If there's no query, return an empty array (no default results)
  if (!options.query || options.query.trim() === '') {
    console.log('Empty query, returning empty results');
    return [];
  }
  
  // First, get relevant documents based on the exact query
  let results = findDocumentsByExactQuery(options.query);
  
  // If no exact query match found, perform keyword search
  if (results.length === 0) {
    // For each query in mockResults, check if the user's query contains it
    for (const mockResult of mockResults) {
      if (options.query.toLowerCase().includes(mockResult.query.toLowerCase())) {
        console.log(`Found partial query match: ${mockResult.query}`);
        results = mockResult.answer;
        break;
      }
    }
  }
  
  console.log(`Initial results before filtering: ${results.length} items`);
  
  // Apply filters to the results
  results = applyFilters(results, options);
  
  console.log(`Final result count: ${results.length}`);
  return results;
};

// Function to apply filters to results
const applyFilters = (results: SearchResultItem[], options: SearchOptions): SearchResultItem[] => {
  let filteredResults = [...results];
  
  // Filter by document type (if specific types are selected)
  if (options.filters.documentType?.length > 0) {
    filteredResults = filteredResults.filter(item => {
      // Get document type from either the direct property or from content
      const docType = item.type || 
        (item.content && item.content[0]?.Document_Details?.Type?.toLowerCase());
      
      return docType && options.filters.documentType.includes(docType);
    });
    console.log(`After document type filter: ${filteredResults.length} results`);
  }
  
  // Filter by department
  if (options.filters.department?.length > 0) {
    filteredResults = filteredResults.filter(item => {
      // Get department from either direct property or from content
      const department = item.department || 
        (item.content && item.content[0]?.Document_Details?.Department);
      
      return department && options.filters.department.some(dept => 
        department.toLowerCase() === dept.toLowerCase()
      );
    });
    console.log(`After department filter: ${filteredResults.length} results`);
  }
  
  // Filter by date range
  if (options.filters.dateRange?.from || options.filters.dateRange?.to) {
    filteredResults = filteredResults.filter(item => {
      const itemDate = new Date(item.date);
      
      if (options.filters.dateRange.from && options.filters.dateRange.to) {
        return itemDate >= options.filters.dateRange.from && 
               itemDate <= options.filters.dateRange.to;
      } 
      else if (options.filters.dateRange.from) {
        return itemDate >= options.filters.dateRange.from;
      }
      else if (options.filters.dateRange.to) {
        return itemDate <= options.filters.dateRange.to;
      }
      
      return true;
    });
    console.log(`After date range filter: ${filteredResults.length} results`);
  }
  
  // Filter by file size
  if (options.filters.fileSize?.length > 0) {
    filteredResults = filteredResults.filter(item => {
      // Get file size from either direct property or from content
      const fileSizeString = item.fileSize || item.size || 
        (item.content && item.content[0]?.Document_Details?.Size);
      
      if (!fileSizeString) return false;
      
      // Try to extract the size value (assume format like "3.1MB")
      const sizeMatch = fileSizeString.match(/(\d+\.?\d*)/);
      if (!sizeMatch) return false;
      
      const size = parseFloat(sizeMatch[0]);
      
      if (options.filters.fileSize.includes('small') && size < 2) {
        return true;
      }
      if (options.filters.fileSize.includes('medium') && size >= 2 && size <= 5) {
        return true;
      }
      if (options.filters.fileSize.includes('large') && size > 5) {
        return true;
      }
      return false;
    });
    console.log(`After file size filter: ${filteredResults.length} results`);
  }
  
  // Filter by persona (only if not 'all')
  if (options.persona !== 'all') {
    // Convert persona to department name format
    const personaToDeptMap: Record<string, string[]> = {
      'trading': ['Trading'],
      'legal': ['Legal'],
      'operations': ['Operations'],
      'finance': ['Finance'],
      'data': ['Data Analytics'],
      'shipping': ['Shipping'],
      'hr': ['HR'],
      'it': ['IT']
    };
    
    const relevantDepartments = personaToDeptMap[options.persona] || [];
    if (relevantDepartments.length > 0) {
      filteredResults = filteredResults.filter(item => {
        // Get department from either direct property or from content
        const department = item.department || 
          (item.content && item.content[0]?.Document_Details?.Department);
          
        return department && relevantDepartments.includes(department);
      });
      console.log(`After persona filter: ${filteredResults.length} results`);
    }
  }
  
  return filteredResults;
}
