import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";
import { Tool } from "@/types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CoolSearch from "@/components/SearchBar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CatalogPage({ tools }: { tools: Tool[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPricingModel, setSelectedPricingModel] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredTools = useMemo(() => {
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || tool.category === selectedCategory) &&
        (selectedPricingModel === "all" ||
          tool.pricing.model === selectedPricingModel)
    );
  }, [tools, searchTerm, selectedCategory, selectedPricingModel]);

  const categories = useMemo(() => {
    return Array.from(new Set(tools.map((tool) => tool.category)));
  }, [tools]);

  const pricingModels = useMemo(() => {
    return Array.from(new Set(tools.map((tool) => tool.pricing.model)));
  }, [tools]);

  return (
    <>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
          <CoolSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            toggleFilters={() => setIsFiltersOpen(!isFiltersOpen)}
          />

          {isFiltersOpen && (
            <motion.div
              className="w-full space-y-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full bg-background/90 backdrop-blur-sm border border-primary/10 rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-background/90 backdrop-blur-sm border border-primary/10 rounded-lg shadow-lg">
                  <SelectItem
                    value="all"
                    className="hover:bg-primary/10 focus:bg-primary/20 rounded transition-colors"
                  >
                    All Categories
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="hover:bg-primary/10 focus:bg-primary/20 rounded transition-colors"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedPricingModel}
                onValueChange={setSelectedPricingModel}
              >
                <SelectTrigger className="w-full bg-background/90 backdrop-blur-sm border border-primary/10 rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <SelectValue placeholder="All Pricing Models" />
                </SelectTrigger>
                <SelectContent className="bg-background/90 backdrop-blur-sm border border-primary/10 rounded-lg shadow-lg">
                  <SelectItem
                    value="all"
                    className="hover:bg-primary/10 focus:bg-primary/20 rounded transition-colors"
                  >
                    All Pricing Models
                  </SelectItem>
                  {pricingModels.map((model) => (
                    <SelectItem
                      key={model}
                      value={model}
                      className="hover:bg-primary/10 focus:bg-primary/20 rounded transition-colors"
                    >
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedPricingModel("all");
                }}
                variant="outline"
                className="w-full rounded-full bg-background/90 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredTools.map((tool) => (
          <motion.div key={tool.id} variants={itemVariants}>
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </motion.div>

      {filteredTools.length === 0 && (
        <motion.p
          className="text-center text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No tools found matching your criteria.
        </motion.p>
      )}
    </>
  );
}
