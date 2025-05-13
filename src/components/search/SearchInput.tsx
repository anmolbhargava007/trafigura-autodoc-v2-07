
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 group">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-trafigura-light-blue transition-colors duration-200" />
      <Input
        type="text"
        placeholder="Search contracts, agreements, reports or type queries like 'contracts between traf and msc'..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-4 py-7 text-lg rounded-full border-2 border-gray-200 focus:border-trafigura-light-blue focus:ring-2 focus:ring-trafigura-light-blue/20 shadow-sm hover:shadow-md transition-all duration-200"
        autoFocus
        autoComplete="off"
      />
      {value && (
        <button 
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-trafigura-dark-blue p-1 rounded-full"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;
