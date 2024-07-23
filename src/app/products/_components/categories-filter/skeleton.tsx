import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CategoriesFilterSkeleton: React.FC = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="bg-gray-200 h-5 w-24" />
      ))}
    </div>
  );
};
