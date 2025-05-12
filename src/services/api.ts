
import { SearchResultItem } from '@/components/SearchResults';
import { DateRange } from "react-day-picker";
import { performKeywordSearch } from './searchUtils';

// Enhanced mock data with improved structure and more document types
const mockResults: SearchResultItem[] = [
  {
    id: 'contract-001',
    title: 'Copper Mining Joint Venture Contract',
    excerpt: 'Legal contract establishing joint venture with Andean Mining Corporation for copper extraction in Peru.',
    type: 'contract',
    department: 'Legal',
    date: '2024-02-03',
    lastModified: '2024-03-15',
    confidential: true,
    fileSize: '5.7MB',
    author: 'Miguel Herrera',
    tags: ['mining', 'copper', 'joint venture', 'peru', 'contract'],
    summary: 'Joint venture agreement for copper extraction operations in the Andean region of Peru. Trafigura holds 60% ownership with capital investment of $120M, while Andean Mining Corporation holds 40% with $80M investment and operational expertise.',
    contentPreview: 'JOINT VENTURE AGREEMENT\n\nThis Joint Venture Agreement (the "Agreement") is made as of February 3, 2024, by and between Trafigura Trading LLC, a company organized under the laws of Switzerland ("Trafigura"), and Andean Mining Corporation, a company organized under the laws of Peru ("AMC").\n\nWHEREAS, the parties desire to establish a joint venture for the purpose of extracting copper resources from the La Montana property located in the Cusco region of Peru...',
    calculations: [
      {
        type: 'sum',
        value: '$200M',
        description: 'Total initial investment'
      },
      {
        type: 'percentage',
        value: '60% / 40%',
        description: 'Ownership structure'
      }
    ],
    pdfUrl: '/documents/copper_mining_contract.pdf'
  },
  {
    id: 'contract-002',
    title: 'Employment Contract Template',
    excerpt: 'Standard employment contract template for full-time employees across all departments.',
    type: 'contract',
    department: 'HR',
    date: '2024-01-10',
    lastModified: '2024-04-05',
    confidential: false,
    fileSize: '1.2MB',
    author: 'HR Department',
    tags: ['employment', 'hr', 'contract', 'hiring', 'onboarding'],
    summary: 'Standard employment contract template used for full-time employees outlining terms of employment, compensation, benefits, confidentiality obligations, and termination conditions.',
    contentPreview: 'EMPLOYMENT AGREEMENT\n\nThis Employment Agreement (the "Agreement") is made and entered into as of [DATE], by and between Trafigura Group Pte. Ltd. ("Employer") and [EMPLOYEE NAME] ("Employee").\n\n1. POSITION AND DUTIES\n\nEmployee shall be employed in the position of [POSITION TITLE] and shall perform such duties as are regularly associated with this position and as may be reasonably requested by Employer...',
    pdfUrl: '/documents/employment_contract_template.pdf'
  },
  {
    id: 'agreement-001',
    title: 'Supply Chain Agreement with Eastern Logistics Ltd',
    excerpt: 'Framework agreement outlining terms for logistics and transportation services across Asian markets.',
    type: 'agreement',
    department: 'Operations',
    date: '2023-12-15',
    lastModified: '2024-01-20',
    confidential: false,
    fileSize: '2.4MB',
    author: 'Sarah Chen',
    tags: ['logistics', 'asia', 'transport', 'supply chain', 'agreement'],
    summary: 'This agreement establishes a 3-year framework for logistics services with Eastern Logistics Ltd covering transportation, warehousing, and distribution across 8 Asian markets.',
    contentPreview: 'ARTICLE 1: DEFINITIONS\n\n1.1 "Services" shall mean all logistics and transportation services provided by Eastern Logistics to Trafigura as outlined in Schedule A.\n\n1.2 "Territory" shall mean the following countries: Japan, South Korea, Singapore, Malaysia, Thailand, Vietnam, Indonesia, and Philippines.\n\n1.3 "Effective Date" shall mean January 1, 2024.\n\nARTICLE 2: SCOPE OF SERVICES\n\n2.1 Eastern Logistics agrees to provide comprehensive logistics services to Trafigura in the Territory according to the specifications outlined in Schedule A...',
    calculations: [
      {
        type: 'sum',
        value: '$4.27M',
        description: 'Total contract value'
      }
    ],
    pdfUrl: '/documents/eastern_logistics_agreement.pdf'
  },
  {
    id: 'agreement-002',
    title: 'Non-Disclosure Agreement (NDA)',
    excerpt: 'Standard confidentiality agreement for protecting sensitive business information shared with third parties.',
    type: 'agreement',
    department: 'Legal',
    date: '2024-02-22',
    confidential: false,
    fileSize: '0.8MB',
    author: 'Legal Department',
    tags: ['confidentiality', 'nda', 'legal', 'protection', 'agreement'],
    summary: 'Standard non-disclosure agreement used to protect confidential information shared with third-party vendors, consultants, and business partners during business negotiations and collaborations.',
    contentPreview: 'NON-DISCLOSURE AGREEMENT\n\nThis Non-Disclosure Agreement (the "Agreement") is entered into as of [DATE] by and between Trafigura Group Pte. Ltd. ("Disclosing Party") and [RECIPIENT NAME] ("Recipient").\n\nWHEREAS, the parties wish to explore business opportunities of mutual interest and in connection with this opportunity, Disclosing Party may disclose to Recipient certain confidential technical and business information...',
    pdfUrl: '/documents/standard_nda.pdf'
  },
  {
    id: 'agreement-003',
    title: 'Service Level Agreement (SLA)',
    excerpt: 'Standard service level agreement outlining performance metrics and service expectations for IT service providers.',
    type: 'agreement',
    department: 'IT',
    date: '2023-11-15',
    lastModified: '2024-03-01',
    confidential: false,
    fileSize: '1.5MB',
    author: 'IT Department',
    tags: ['sla', 'it', 'service', 'metrics', 'agreement'],
    summary: 'Service level agreement template defining the standards of service, performance metrics, responsibilities, and remedies for IT service providers working with the company.',
    contentPreview: 'SERVICE LEVEL AGREEMENT\n\nThis Service Level Agreement (the "SLA") is entered into as of [DATE] by and between Trafigura Group Pte. Ltd. ("Client") and [SERVICE PROVIDER] ("Provider").\n\n1. SERVICES\n\nProvider agrees to provide the IT services ("Services") described in Exhibit A attached hereto in accordance with the terms and conditions of this SLA...',
    pdfUrl: '/documents/it_service_level_agreement.pdf'
  },
  {
    id: 'policy-001',
    title: 'Privacy Policy',
    excerpt: 'Corporate privacy policy outlining data collection, usage, and protection practices for employees and customers.',
    type: 'policy',
    department: 'Legal',
    date: '2024-01-18',
    lastModified: '2024-01-18',
    confidential: false,
    fileSize: '1.1MB',
    author: 'Data Protection Team',
    tags: ['privacy', 'data protection', 'gdpr', 'compliance', 'policy'],
    summary: 'Corporate privacy policy detailing the company\'s data collection, processing, storage, and protection practices in compliance with global privacy regulations including GDPR and CCPA.',
    contentPreview: 'PRIVACY POLICY\n\nEffective Date: January 18, 2024\n\n1. INTRODUCTION\n\nTrafigura Group Pte. Ltd. and its affiliates (collectively "Trafigura," "we," "our," or "us") are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard personal information...',
    pdfUrl: '/documents/privacy_policy.pdf'
  },
  {
    id: 'policy-002',
    title: 'Terms & Conditions',
    excerpt: 'Standard terms and conditions governing the use of company services and products.',
    type: 'policy',
    department: 'Legal',
    date: '2023-12-05',
    confidential: false,
    fileSize: '1.3MB',
    author: 'Legal Department',
    tags: ['terms', 'conditions', 'legal', 'services', 'policy'],
    summary: 'Standard terms and conditions document outlining the rules, guidelines, and legal limitations that govern the use of the company\'s services, products, and digital platforms.',
    contentPreview: 'TERMS AND CONDITIONS\n\nLast Updated: December 5, 2023\n\n1. ACCEPTANCE OF TERMS\n\nBy accessing or using any services, products, or digital platforms (collectively, the "Services") provided by Trafigura Group Pte. Ltd. and its affiliates (collectively "Trafigura," "we," "our," or "us"), you agree to be bound by these Terms and Conditions...',
    pdfUrl: '/documents/terms_and_conditions.pdf'
  },
  {
    id: 'agreement-004',
    title: 'Aluminum Supply Agreement with Norsk Hydro',
    excerpt: 'Long-term supply contract for aluminum products from Norwegian manufacturer for European markets.',
    type: 'agreement',
    department: 'Trading',
    date: '2023-10-12',
    lastModified: '2024-01-08',
    confidential: true,
    fileSize: '4.8MB',
    author: 'Metals Trading Team',
    tags: ['aluminum', 'europe', 'supply chain', 'metals', 'agreement'],
    summary: 'Five-year aluminum supply agreement with Norsk Hydro providing exclusive distribution rights for 120,000 metric tons annually across Western European markets.',
    contentPreview: 'SUPPLY AGREEMENT\\n\\nThis Supply Agreement (the \"Agreement\") is made and entered into as of October 12, 2023 by and between Trafigura Trading LLC (\"Buyer\") and Norsk Hydro ASA (\"Supplier\").\\n\\nWHEREAS, Supplier manufactures and sells aluminum products; and\\n\\nWHEREAS, Buyer wishes to purchase aluminum products from Supplier for distribution in Western European markets...',
    calculations: [
      {
        type: 'volume',
        value: '120,000 MT/year',
        description: 'Annual supply volume'
      }
    ],
    pdfUrl: '/documents/aluminum_supply_agreement.pdf'
  },
  {
    id: 'contract-003',
    title: 'Standard Freelance Agreement',
    excerpt: 'Template contract for engaging freelance consultants and contractors across all departments.',
    type: 'contract',
    department: 'HR',
    date: '2024-03-15',
    confidential: false,
    fileSize: '0.9MB',
    author: 'HR Department',
    tags: ['freelance', 'contract', 'consultant', 'independent contractor', 'hr'],
    summary: 'Standard freelance agreement template used for engaging independent contractors and consultants, outlining scope of work, payment terms, intellectual property rights, and term of engagement.',
    contentPreview: 'FREELANCE AGREEMENT\n\nThis Freelance Agreement (the "Agreement") is entered into as of [DATE] by and between Trafigura Group Pte. Ltd. ("Company") and [FREELANCER NAME] ("Freelancer").\n\n1. SERVICES\n\nFreelancer agrees to perform the services described in Exhibit A (the "Services") to the best of Freelancer\'s ability...',
    pdfUrl: '/documents/standard_freelance_agreement.pdf'
  }
];

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

// Advanced search implementation with improved relevance
const performSearch = (options: SearchOptions): SearchResultItem[] => {
  let results = [...mockResults];
  
  console.log(`Starting search with ${results.length} items`);
  
  // If query is empty and no filters are applied, return all results
  const hasFilters = 
    options.filters.documentType.length > 0 || 
    options.filters.department.length > 0 ||
    options.filters.confidentiality.length > 0 ||
    options.filters.fileSize.length > 0 ||
    options.filters.dateRange?.from || 
    options.filters.dateRange?.to ||
    options.persona !== 'all';
  
  // Return all results for empty searches with no filters
  if (!options.query && !hasFilters) {
    console.log('Empty query with no filters, returning all results');
    return results;
  }
  
  // Apply keyword search with exact matching if query exists
  if (options.query && options.query.trim() !== '') {
    results = performKeywordSearch(results, options.query);
    console.log(`After keyword search: ${results.length} results`);
  }
  
  // Filter by document type (if specific types are selected)
  if (options.filters.documentType?.length > 0) {
    results = results.filter(item => 
      options.filters.documentType.includes(item.type)
    );
    console.log(`After document type filter: ${results.length} results`);
  }
  
  // Filter by department
  if (options.filters.department?.length > 0) {
    results = results.filter(item =>
      options.filters.department.some(dept => 
        item.department.toLowerCase() === dept.toLowerCase()
      )
    );
    console.log(`After department filter: ${results.length} results`);
  }
  
  // Filter by confidentiality
  if (options.filters.confidentiality?.length > 0) {
    results = results.filter(item => {
      if (options.filters.confidentiality.includes('confidential')) {
        return item.confidential === true;
      }
      if (options.filters.confidentiality.includes('public')) {
        return item.confidential === false;
      }
      return true;
    });
    console.log(`After confidentiality filter: ${results.length} results`);
  }
  
  // Filter by file size
  if (options.filters.fileSize?.length > 0) {
    results = results.filter(item => {
      if (!item.fileSize) return false;
      
      const size = parseFloat(item.fileSize);
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
    console.log(`After file size filter: ${results.length} results`);
  }
  
  // Filter by date range
  if (options.filters.dateRange?.from || options.filters.dateRange?.to) {
    results = results.filter(item => {
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
    console.log(`After date range filter: ${results.length} results`);
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
      'hr': ['HR'],
      'it': ['IT']
    };
    
    const relevantDepartments = personaToDeptMap[options.persona] || [];
    if (relevantDepartments.length > 0) {
      results = results.filter(item => relevantDepartments.includes(item.department));
      console.log(`After persona filter: ${results.length} results`);
    }
  }
  
  console.log(`Final result count: ${results.length}`);
  return results;
};
