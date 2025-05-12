
import React from 'react';
import { Calculator, Calendar, FileText } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface SearchHelperBadgesProps {
  activeHelpers: string[];
  toggleHelper: (helper: string) => void;
}

const SearchHelperBadges: React.FC<SearchHelperBadgesProps> = ({ activeHelpers, toggleHelper }) => {
  const helpers = [
    { id: 'calculation', label: 'Calculation', icon: Calculator },
    { id: 'timeframe', label: 'Time Frame', icon: Calendar },
    { id: 'nested', label: 'Nested Query', icon: FileText }
  ];

  return (
    <div className="flex flex-wrap gap-2 ml-2">
      {helpers.map(helper => (
        <Badge 
          key={helper.id}
          variant={activeHelpers.includes(helper.id) ? "default" : "outline"}
          className={`cursor-pointer ${activeHelpers.includes(helper.id) ? 'bg-trafigura-light-blue' : ''}`}
          onClick={() => toggleHelper(helper.id)}
        >
          <helper.icon className="mr-1 h-3 w-3" />
          {helper.label}
        </Badge>
      ))}
    </div>
  );
};

export default SearchHelperBadges;
