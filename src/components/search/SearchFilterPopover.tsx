
import React from 'react';
import { Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from "@/components/ui/separator";

interface FiltersState {
  documentType: string;
  dateRange: string;
  department: string;
  includeArchived: boolean;
}

interface SearchFilterPopoverProps {
  filters: FiltersState;
  updateFilter: (key: string, value: any) => void;
  searchMode: string;
  setSearchMode: (mode: string) => void;
}

const SearchFilterPopover: React.FC<SearchFilterPopoverProps> = ({
  filters,
  updateFilter,
  searchMode,
  setSearchMode
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          type="button" 
          variant="outline" 
          size="icon"
          className="rounded-full h-12 w-12 border-2 border-gray-200"
        >
          <Sliders className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h3 className="font-medium">Advanced Filters</h3>
          
          <Tabs defaultValue="filters" className="w-full">
            <TabsList className="grid grid-cols-2 mb-2">
              <TabsTrigger value="filters">Basic Filters</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="filters">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="documentType">Document Type</Label>
                  <Select 
                    value={filters.documentType}
                    onValueChange={(value) => updateFilter('documentType', value)}
                  >
                    <SelectTrigger id="documentType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Documents</SelectItem>
                      <SelectItem value="contract">Contracts</SelectItem>
                      <SelectItem value="agreement">Agreements</SelectItem>
                      <SelectItem value="report">Reports</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="policy">Policies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateRange">Date Range</Label>
                  <Select
                    value={filters.dateRange}
                    onValueChange={(value) => updateFilter('dateRange', value)}
                  >
                    <SelectTrigger id="dateRange">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Time</SelectItem>
                      <SelectItem value="day">Past 24 Hours</SelectItem>
                      <SelectItem value="week">Past Week</SelectItem>
                      <SelectItem value="month">Past Month</SelectItem>
                      <SelectItem value="year">Past Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    value={filters.department}
                    onValueChange={(value) => updateFilter('department', value)}
                  >
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="trading">Trading</SelectItem>
                      <SelectItem value="data">Data Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="archived" 
                    checked={filters.includeArchived}
                    onCheckedChange={(checked) => 
                      updateFilter('includeArchived', checked === true)
                    }
                  />
                  <Label htmlFor="archived">Include archived documents</Label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="advanced">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="searchMode">Search Mode</Label>
                  <Select
                    value={searchMode}
                    onValueChange={setSearchMode}
                  >
                    <SelectTrigger id="searchMode">
                      <SelectValue placeholder="Select search mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Search</SelectItem>
                      <SelectItem value="semantic">Semantic Search</SelectItem>
                      <SelectItem value="contextual">Contextual Search</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="summary">Result Summary</Label>
                  <Select>
                    <SelectTrigger id="summary">
                      <SelectValue placeholder="Summary options" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Summary</SelectItem>
                      <SelectItem value="brief">Brief Summary</SelectItem>
                      <SelectItem value="detailed">Detailed Summary</SelectItem>
                      <SelectItem value="key-points">Key Points Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <h4 className="text-sm font-medium">Example Search Queries:</h4>
                <div className="text-xs space-y-1 text-muted-foreground">
                  <p>- "copper contracts in Peru from last year"</p>
                  <p>- "calculate total value in LNG agreements"</p>
                  <p>- "environmental reports with compliance data"</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchFilterPopover;
