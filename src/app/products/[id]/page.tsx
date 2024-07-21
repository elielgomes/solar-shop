import Image from "next/image";
import { NextPage } from "next";
import { ShoppingCart } from "lucide-react";

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
import { routesMap } from "@/constants/routes-map";
import { currencyFormat } from "@/helpers/currency-format";
import { product as productService } from "@/services/product";

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = async ({
  params,
}) => {
  const product = await productService.getOne(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
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
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="min-h-[500px] lg:grid">
          <div className="relative w-full h-full">
            <Image
              src="/assets/products/placeholder.webp"
              alt=""
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Informações do produto</h2>
              <p className="text-2xl text-gray-900">
                {currencyFormat(product.price)}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-4 w-fit">
              <p className="text-xs">Quantidade</p>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min="1"
                  max="99"
                  defaultValue="1"
                  className="w-20 text-center"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <Button
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
    </main>
  );
};

export default ProductDetailPage;
