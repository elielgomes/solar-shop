"use client";

import Image from "next/image";
import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Loader } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { routesMap } from "@/constants/routes-map";
import { formatCurrency } from "@/helpers/format-currency";
import { product as productService } from "@/services/product";

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ params }) => {
  const cartStore = useCartStore();
  const [quantityProduct, setQuantityProduct] = useState(1);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => productService.getOne(params.id),
    refetchOnWindowFocus: false,
  });

  const handleAddProductToCart = () => {
    if (product) {
      cartStore.addProduct(product, quantityProduct);
    }
  };

  const handleAddQuantityProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantityProduct(Number(event.target.value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <Loader className="animate-spin text-primary size-8" />
        </div>
      ) : (
        <div className="container h-full grid lg:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          <div className="col-span-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={routesMap.home}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={routesMap.products}>
                    Produtos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product?.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="min-h-[500px] lg:grid">
            <div className="relative w-full h-full">
              <Image
                src={product?.image || "/assets/products/placeholder.webp"}
                alt={product?.name || "Product image"}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product?.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Informações do produto</h2>
                {product && (
                  <p className="text-2xl text-gray-900">
                    {formatCurrency(product.price)}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-4 w-fit">
                <p className="text-xs">Quantidade</p>
                <div className="flex items-center gap-2">
                  <Input
                    onChange={(e) => handleAddQuantityProduct(e)}
                    type="number"
                    min="1"
                    max="99"
                    defaultValue="1"
                    value={quantityProduct}
                    className="w-20 text-center"
                  />
                </div>
              </div>
              {product && (
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div
                    className="text-base text-gray-700 space-y-6"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              )}

              <form className="mt-6">
                <div className="mt-10 flex">
                  <Button
                    onClick={handleAddProductToCart}
                    type="button"
                    className="max-w-xs flex-1 py-3 px-8 flex gap-2"
                  >
                    <ShoppingCart className="size-4" />
                    Adicionar ao carrinho
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetailPage;
