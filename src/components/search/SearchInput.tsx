
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
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-trafigura-light-blue transition-colors duration-200" />
      <Input
        type="text"
        placeholder="Search contracts, agreements, reports..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-4 py-7 text-lg rounded-full border-2 border-gray-200 focus:border-trafigura-light-blue shadow-inner hover:shadow-md transition-all duration-200"
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
