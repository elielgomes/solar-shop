import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { ProductCartProps } from "@/stores/cart-store";
import { useProductCart } from "@/hooks/use-product-cart";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductListItemProps {
  data: ProductCartProps;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ data }) => {
  const { handleAddProductToCart, handleRemoveProduct, handleDeleteProduct } =
    useProductCart(data);

  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0 bg-blue-50 rounded-md">
        <Image
          src={data.image}
          alt={data.name}
          className="w-full h-full object-center object-contain sm:w-48 sm:h-48 mix-blend-multiply"
          width={192}
          height={192}
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <Link
                  href={`${routesMap.products}/${data.id}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {data.name}
                </Link>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{data?.category?.name}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {formatCurrency(data.price)}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor="quantity-0" className="sr-only">
              Quantidade de {data.name}
            </label>
            <div className="flex gap-1 items-center">
              <Button
                type="button"
                onClick={handleRemoveProduct}
                variant="ghost"
                className="size-6 p-0 flex justify-center items-center"
              >
                <MinusIcon className="size-4" />
              </Button>
              <span className="h-6 w-fit px-4 flex text-sm items-center justify-center rounded-md border border-border">
                {data.quantity?.toString()}
              </span>
              <Button
                type="button"
                onClick={handleAddProductToCart}
                variant="ghost"
                className="size-6 p-0 flex justify-center items-center"
              >
                <PlusIcon className="size-4" />
              </Button>
            </div>

            <div className="absolute top-0 right-0">
              <button
                onClick={handleDeleteProduct}
                type="button"
                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remover</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex text-sm text-gray-700 space-x-2">
          <svg
            className="flex-shrink-0 h-5 w-5 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Em estoque</span>
        </p>
      </div>
    </li>
  );
};
