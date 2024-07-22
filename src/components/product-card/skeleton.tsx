import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="h-96 bg-gray-300 rounded overflow-hidden shadow-md shadow-gray-600/5">
      <Skeleton className="w-full relative h-2/3 bg-gray-200 rounded-none">
        <div className="text-xs mb-2 absolute top-0 right-0 rounded-none rounded-es w-20 h-5 bg-gray-300" />
      </Skeleton>
      <div className="px-6 py-4 h-1/3 relative bg-gray-100">
        <Skeleton className="h-6 w-full bg-gray-300 mb-1 rounded-full" />
        <Skeleton className="h-6 w-1/3 bg-gray-300 rounded-full" />
        <Skeleton className="absolute bottom-4 left-6 h-5 bg-gray-200 w-20 rounded-full" />
      </div>
    </div>
  );
};
