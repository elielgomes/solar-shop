"use client";

import React, { useState } from "react";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const sortOptions = [
  { value: "asc", label: "De A-Z", icon: MoveRight },
  { value: "desc", label: "De Z-A", icon: MoveLeft },
  { value: "asc-price", label: "Maior Preço", icon: MoveUp },
  { value: "desc-price", label: "Menor Preço", icon: MoveDown },
] as const;

export const SelectSortProducts: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>("asc");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateURLParams = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    params.get("sort")?.trim() === "" && params.delete("sort");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSelect = (value: string) => {
    setSelectValue(value);
    updateURLParams(value);
  };

  return (
    <Select onValueChange={handleSelect} value={selectValue}>
      <SelectTrigger className="bg-card  h-full shadow-md shadow-gray-600/5 border border-border rounded outline-none focus:ring-offset-0 focus:ring-0 transition-colors gap-2">
        <span>Ordenar por</span>
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="relative pr-8"
          >
            {option.label}
            <span className="absolute right-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
              <option.icon className="size-3" />
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
