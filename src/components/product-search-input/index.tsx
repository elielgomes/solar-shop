import React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/tw-merge";

interface ProductSearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const ProductSearchInput: React.FC<ProductSearchInputProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search />
      </div>
      <Input
        {...props}
        type="search"
        id="default-search"
        className={cn(
          "block w-full ps-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0",
          className
        )}
        placeholder="Busque por produtos..."
        required
      />
      <Button
        type="submit"
        className="text-white absolute bottom-0.5 top-0.5 text-xs h-auto end-0.5"
      >
        Buscar
      </Button>
    </div>
  );
};
