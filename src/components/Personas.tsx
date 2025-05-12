
import React from 'react';
import { User, Briefcase, Scale, LineChart, Truck, Database, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonaProps {
  currentPersona: string;
  onPersonaChange: (persona: string) => void;
}

const personaData = [
  { id: 'all', label: 'All', icon: User },
  { id: 'trading', label: 'Trading', icon: LineChart },
  { id: 'legal', label: 'Legal', icon: Scale },
  { id: 'operations', label: 'Operations', icon: Truck },
  { id: 'finance', label: 'Finance', icon: Briefcase },
  { id: 'data', label: 'Data Analytics', icon: Database },
  { id: 'hr', label: 'HR', icon: Users },
];

const Personas: React.FC<PersonaProps> = ({ currentPersona, onPersonaChange }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-2 py-4">
        {personaData.map((persona) => (
          <button
            key={persona.id}
            onClick={() => onPersonaChange(persona.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all",
              currentPersona === persona.id
                ? "bg-trafigura-light-blue text-white"
                : "bg-white border border-gray-200 hover:bg-gray-50"
            )}
            aria-label={`Switch to ${persona.label} persona`}
            aria-pressed={currentPersona === persona.id}
          >
            <persona.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{persona.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Personas;
