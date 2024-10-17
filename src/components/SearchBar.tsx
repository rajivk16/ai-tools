import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

export default function CoolSearch({ 
  searchTerm, 
  setSearchTerm, 
  toggleFilters 
}: { 
  searchTerm: string, 
  setSearchTerm: (term: string) => void, 
  toggleFilters: () => void 
}) {
  return (
    <div className="flex items-center space-x-2 bg-background/90 backdrop-blur-sm border border-primary/10 rounded-full p-1 shadow-lg max-w-2xl mx-auto">
      <div className="flex-grow flex items-center bg-background/50 rounded-full">
        <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground ml-3" />
        <Input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 bg-transparent focus:ring-0 text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Button
        onClick={toggleFilters}
        variant="ghost"
        className="rounded-full p-2 hover:bg-primary/10"
      >
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}