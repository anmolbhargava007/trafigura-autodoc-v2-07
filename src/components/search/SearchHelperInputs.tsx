
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface SearchHelperInputsProps {
  activeHelpers: string[];
  calculationType: string;
  setCalculationType: (value: string) => void;
  timeFrame: string;
  setTimeFrame: (value: string) => void;
  nestedQuery: string;
  setNestedQuery: (value: string) => void;
}

const SearchHelperInputs: React.FC<SearchHelperInputsProps> = ({
  activeHelpers,
  calculationType,
  setCalculationType,
  timeFrame,
  setTimeFrame,
  nestedQuery,
  setNestedQuery
}) => {
  if (activeHelpers.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 p-3 bg-gray-50 rounded-lg mt-2 animate-fade-in">
      {activeHelpers.includes('calculation') && (
        <div className="flex items-center gap-2">
          <Label htmlFor="calculation" className="min-w-24">Calculation:</Label>
          <Select value={calculationType} onValueChange={setCalculationType}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select calculation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sum">Sum (total)</SelectItem>
              <SelectItem value="average">Average</SelectItem>
              <SelectItem value="count">Count</SelectItem>
              <SelectItem value="maximum">Maximum</SelectItem>
              <SelectItem value="minimum">Minimum</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      {activeHelpers.includes('timeframe') && (
        <div className="flex items-center gap-2">
          <Label htmlFor="timeframe" className="min-w-24">Time frame:</Label>
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last month">Last Month</SelectItem>
              <SelectItem value="last quarter">Last Quarter</SelectItem>
              <SelectItem value="last 6 months">Last 6 Months</SelectItem>
              <SelectItem value="last year">Last Year</SelectItem>
              <SelectItem value="custom date range">Custom Date Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      {activeHelpers.includes('nested') && (
        <div className="flex items-center gap-2">
          <Label htmlFor="nested" className="min-w-24">Documents that:</Label>
          <Input
            id="nested"
            type="text"
            placeholder="e.g., mention environmental compliance"
            value={nestedQuery}
            onChange={(e) => setNestedQuery(e.target.value)}
            className="flex-1"
          />
        </div>
      )}
    </div>
  );
};

export default SearchHelperInputs;
