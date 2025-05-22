import { SearchResultItem } from "@/components/SearchResults";
import { DateRange } from "react-day-picker";
import { performKeywordSearch } from "./searchUtils";
import mockResults from "./demo.js"

// Create a mapping of file names to their imported references
const pdfMap: Record<string, string> = {
  "CHBSL3716644.pdf": "/pdf/CHBSL3716644.pdf",
  "DOC_MV23FW007656RRO_1_I8232012170.pdf":
    "/pdf/DOC_MV23FW007656RRO_1_I8232012170.pdf",
  "DOC_MV23FW008231RRO_1_I8232012171.pdf":
    "/pdf/DOC_MV23FW008231RRO_1_I8232012171.pdf",
  "Invoice_INV178629_1697739314386.pdf":
    "/pdf/Invoice_INV178629_1697739314386.pdf",
  "Invoice_INV178631_1697739461140.pdf":
    "/pdf/Invoice_INV178631_1697739461140.pdf",
  "Trafigura VR#22289 10-20-23.pdf": "/pdf/Trafigura VR#22289 10-20-23.pdf",
  "Trafigura VR#VR22260 10-20-23.pdf": "/pdf/Trafigura VR#VR22260 10-20-23.pdf",
  "oil_contract.pdf": "/pdf/oil_contract.pdf",
};

export const getPdfUrlByFilename = (filename: string): string => {
  if (pdfMap[filename]) {
    return pdfMap[filename];
  }

  const keys = Object.keys(pdfMap);
  const matchingKey = keys.find(
    (key) => key.includes(filename) || filename.includes(key)
  );

  if (matchingKey) {
    return pdfMap[matchingKey];
  }

  throw new Error(`PDF file "${filename}" not found`);
};

const findDocumentsByExactQuery = (query: string): SearchResultItem[] => {
  console.log(`Looking for exact query match: "${query}" in mock data`);

  const normalizedQuery = query.toLowerCase();

  const exactQueryMatch = mockResults.find(
    (item) => item.query.toLowerCase() === normalizedQuery
  );

  if (exactQueryMatch) {
    console.log(
      `Found exact query match with ${exactQueryMatch.answer.length} documents`
    );
    return exactQueryMatch.answer;
  }

  console.log("No exact query match found");
  return [];
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

export const searchDocuments = async (
  query: string,
  filters: any,
  persona: string
): Promise<SearchResultItem[]> => {
  console.log("Searching with:", { query, filters, persona });

  const searchOptions: SearchOptions = {
    query,
    filters: {
      ...filters,
      documentType: Array.isArray(filters.documentType)
        ? filters.documentType
        : [],
      department: Array.isArray(filters.department) ? filters.department : [],
      confidentiality: Array.isArray(filters.confidentiality)
        ? filters.confidentiality
        : [],
      fileSize: Array.isArray(filters.fileSize) ? filters.fileSize : [],
      dateRange: filters.dateRange || { from: undefined, to: undefined },
    },
    persona,
  };

  console.log("Processed search options:", searchOptions);

  await delay(800);

  return performSearch(searchOptions);
};

const performSearch = (options: SearchOptions): SearchResultItem[] => {
  console.log(`Starting search with query: "${options.query}"`);

  if (!options.query || options.query.trim() === "") {
    console.log("Empty query, returning empty results");
    return [];
  }

  let results = findDocumentsByExactQuery(options.query);

  if (results.length === 0) {
    for (const mockResult of mockResults) {
      if (
        options.query.toLowerCase().includes(mockResult.query.toLowerCase())
      ) {
        console.log(`Found partial query match: ${mockResult.query}`);
        results = mockResult.answer;
        break;
      }
    }
  }

  console.log(`Initial results before filtering: ${results.length} items`);

  results = applyFilters(results, options);

  console.log(`Final result count: ${results.length}`);
  return results;
};

const applyFilters = (
  results: SearchResultItem[],
  options: SearchOptions
): SearchResultItem[] => {
  let filteredResults = [...results];

  if (options.filters.documentType?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      const docType =
        item.type ||
        (item.content &&
          item.content[0]?.Document_Details?.Type?.toLowerCase());

      return docType && options.filters.documentType.includes(docType);
    });
    console.log(
      `After document type filter: ${filteredResults.length} results`
    );
  }

  // Filter by department
  if (options.filters.department?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      const department =
        item.department ||
        (item.content && item.content[0]?.Document_Details?.Department);

      return (
        department &&
        options.filters.department.some(
          (dept) => department.toLowerCase() === dept.toLowerCase()
        )
      );
    });
    console.log(`After department filter: ${filteredResults.length} results`);
  }

  // Filter by date range
  if (options.filters.dateRange?.from || options.filters.dateRange?.to) {
    filteredResults = filteredResults.filter((item) => {
      const itemDate = new Date(item.date);

      if (options.filters.dateRange.from && options.filters.dateRange.to) {
        return (
          itemDate >= options.filters.dateRange.from &&
          itemDate <= options.filters.dateRange.to
        );
      } else if (options.filters.dateRange.from) {
        return itemDate >= options.filters.dateRange.from;
      } else if (options.filters.dateRange.to) {
        return itemDate <= options.filters.dateRange.to;
      }

      return true;
    });
    console.log(`After date range filter: ${filteredResults.length} results`);
  }

  // Filter by file size
  if (options.filters.fileSize?.length > 0) {
    filteredResults = filteredResults.filter((item) => {
      const fileSizeString =
        item.fileSize ||
        item.size ||
        (item.content && item.content[0]?.Document_Details?.Size);

      if (!fileSizeString) return false;

      const sizeMatch = fileSizeString.match(/(\d+\.?\d*)/);
      if (!sizeMatch) return false;

      const size = parseFloat(sizeMatch[0]);

      if (options.filters.fileSize.includes("small") && size < 2) {
        return true;
      }
      if (
        options.filters.fileSize.includes("medium") &&
        size >= 2 &&
        size <= 5
      ) {
        return true;
      }
      if (options.filters.fileSize.includes("large") && size > 5) {
        return true;
      }
      return false;
    });
    console.log(`After file size filter: ${filteredResults.length} results`);
  }

  if (options.persona !== "all") {
    const personaToDeptMap: Record<string, string[]> = {
      trading: ["Trading"],
      legal: ["Legal"],
      operations: ["Operations"],
      finance: ["Finance"],
      data: ["Data Analytics"],
      shipping: ["Shipping"],
      hr: ["HR"],
      it: ["IT"],
    };

    const relevantDepartments = personaToDeptMap[options.persona] || [];
    if (relevantDepartments.length > 0) {
      filteredResults = filteredResults.filter((item) => {
        // Get department from either direct property or from content
        const department =
          item.department ||
          (item.content && item.content[0]?.Document_Details?.Department);

        return department && relevantDepartments.includes(department);
      });
      console.log(`After persona filter: ${filteredResults.length} results`);
    }
  }

  return filteredResults;
};