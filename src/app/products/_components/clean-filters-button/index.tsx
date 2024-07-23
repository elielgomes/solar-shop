import React from "react";
import Link from "next/link";
import { FilterX } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";

export const CleanFiltersButton: React.FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="link">
            <Link
              href={routesMap.products}
              className="w-fit flex items-center gap-2 font-semibold text-sm text-destructive bg-destructive/5 p-2 shadow-md shadow-gray-600/5 border border-destructive rounded"
            >
              <FilterX className="size-4 text-destructive" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Limpar filtros</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
