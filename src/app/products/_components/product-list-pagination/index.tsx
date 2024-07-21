"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductListPaginationProps {
  currentPage: number;
  totalPages: number;
}

export const ProductListPagination: React.FC<ProductListPaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const paginationLink = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    params.get("page")?.trim() === "" && params.delete("page");
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {hasPrevious && (
          <>
            <PaginationItem>
              <PaginationPrevious href={paginationLink(currentPage - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={paginationLink(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink
            href={paginationLink(currentPage)}
            isActive
            className="border-primary bg-primary/20 text-primary"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {hasNext && (
          <>
            <PaginationItem>
              <PaginationLink href={paginationLink(currentPage + 1)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href={paginationLink(currentPage + 2)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};
