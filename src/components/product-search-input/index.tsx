"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/tw-merge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";

interface ProductSearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const ProductSearchInput: React.FC<ProductSearchInputProps> = ({
  className,
  ...props
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState<string>("");

  const updateURLParams = (text: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("search", text);
    params.get("search")?.trim() === "" && params.delete("search");
    router.replace(`${routesMap.products}?${params.toString()}`);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateURLParams(searchInput);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search />
      </div>
      <Input
        {...props}
        type="search"
        className={cn(
          "block w-full ps-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0",
          className
        )}
        placeholder="Busque por produtos..."
        required
        value={searchInput}
        onChange={handleInput}
      />
      <Button
        type="submit"
        className="text-white absolute bottom-0.5 top-0.5 text-xs h-auto end-0.5"
      >
        Buscar
      </Button>
    </form>
  );
};
