import { ProductCardSkeleton } from "@/components/product-card/skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCarouselSkeleton: React.FC = () => {
  return (
    <>
      <div className="text-xl font-bold w-full">
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="w-28 h-7" />
            <Skeleton className="w-28 h-7" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            <div>
              <ProductCardSkeleton />
            </div>
            <div className="hidden md:block">
              <ProductCardSkeleton />
            </div>
            <div className="hidden sm:block">
              <ProductCardSkeleton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
