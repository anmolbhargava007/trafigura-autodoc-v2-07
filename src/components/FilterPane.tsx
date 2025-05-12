
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import { cn } from '@/lib/utils';

interface FilterPaneProps {
  onFiltersChange: (filters: any) => void;
  filters: any;
}

const FilterPane: React.FC<FilterPaneProps> = ({ onFiltersChange, filters }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    documentType: true,
    department: true,
    confidentiality: true,
    dateRange: false,
    fileSize: false
  });

  const toggleSection = (section: string) => {
    setExpanded({ ...expanded, [section]: !expanded[section] });
  };

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    let newValues;
    
    if (!filters[category]) {
      newValues = checked ? [value] : [];
    } else if (checked) {
      newValues = [...filters[category], value];
    } else {
      newValues = filters[category].filter((v: string) => v !== value);
    }
    
    onFiltersChange({ ...filters, [category]: newValues });
  };

  const handleDateRangeChange = (dateRange: any) => {
    onFiltersChange({ ...filters, dateRange });
  };
  
  const clearAllFilters = () => {
    onFiltersChange({
      documentType: [],
      department: [],
      confidentiality: [],
      dateRange: { from: undefined, to: undefined },
      fileSize: []
    });
  };

  const FilterSection = ({ 
    title, 
    category, 
    options 
  }: { 
    title: string; 
    category: string; 
    options: {value: string; label: string; count: number}[] 
  }) => (
    <Collapsible open={expanded[category]} onOpenChange={() => toggleSection(category)}>
      <div className="flex items-center justify-between py-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-5 w-5">
            {expanded[category] ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-1 pb-3">
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={`${category}-${option.value}`}
                  checked={(filters[category] || []).includes(option.value)}
                  onCheckedChange={(checked) => 
                    handleFilterChange(category, option.value, checked === true)
                  }
                />
                <Label 
                  htmlFor={`${category}-${option.value}`}
                  className="text-sm cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
              <span className="text-xs text-gray-400">({option.count})</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
      <Separator className="my-2" />
    </Collapsible>
  );

  return (
    <div className={cn(
      "w-64 p-4 border-r border-gray-200 bg-white h-full overflow-auto",
      "transition-all duration-200"
    )}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-trafigura-dark-blue">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-gray-500 hover:text-trafigura-dark-blue"
          onClick={clearAllFilters}
        >
          Clear all
        </Button>
      </div>
      
      <FilterSection 
        title="Document Type" 
        category="documentType"
        options={[
          { value: 'contract', label: 'Contracts', count: 24 },
          { value: 'agreement', label: 'Agreements', count: 18 },
          { value: 'report', label: 'Reports', count: 32 },
          { value: 'research', label: 'Research', count: 15 },
          { value: 'policy', label: 'Policies', count: 9 }
        ]}
      />
      
      <FilterSection 
        title="Department" 
        category="department"
        options={[
          { value: 'trading', label: 'Trading', count: 36 },
          { value: 'legal', label: 'Legal', count: 28 },
          { value: 'operations', label: 'Operations', count: 22 },
          { value: 'finance', label: 'Finance', count: 17 },
          { value: 'data', label: 'Data Analytics', count: 8 },
          { value: 'hr', label: 'HR', count: 7 }
        ]}
      />
      
      <FilterSection 
        title="Confidentiality" 
        category="confidentiality"
        options={[
          { value: 'public', label: 'Public', count: 45 },
          { value: 'internal', label: 'Internal Only', count: 32 },
          { value: 'confidential', label: 'Confidential', count: 18 },
          { value: 'restricted', label: 'Highly Restricted', count: 5 }
        ]}
      />
      
      <Collapsible open={expanded.dateRange} onOpenChange={() => toggleSection('dateRange')}>
        <div className="flex items-center justify-between py-2">
          <h3 className="text-sm font-medium">Date Range</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-5 w-5">
              {expanded.dateRange ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-1 pb-3">
          <DatePickerWithRange 
            date={filters.dateRange} 
            setDate={handleDateRangeChange} 
          />
        </CollapsibleContent>
        <Separator className="my-2" />
      </Collapsible>
      
      <FilterSection 
        title="File Size" 
        category="fileSize"
        options={[
          { value: 'small', label: 'Small (<1MB)', count: 38 },
          { value: 'medium', label: 'Medium (1-10MB)', count: 29 },
          { value: 'large', label: 'Large (>10MB)', count: 12 }
        ]}
      />
    </div>
  );
};

export default FilterPane;
