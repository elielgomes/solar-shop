import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { ArrowRightIcon } from "lucide-react";

import { product } from "@/services/product";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { hrefCategory } from "@/constants/categories";
import { ProductCarousel } from "@/components/product-carousel";

const HomePage: NextPage = async () => {
  const categories = ["estruturas", "eletricos", "inversores"];
  const promises = categories.map((category) =>
    product.getAll(`?category=${category}&limit=6`)
  );
  const products = await Promise.all(promises);

  return (
    <main className="min-h-screen my-16 md:my-28">
      <div className="relative bg-blue-50 overflow-hidden lg:h-[500px]">
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative z-10 pb-8 bg-blue-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-blue-50 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left pt-10 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="flex gap-2 sm:justify-center lg:justify-start items-center">
                    <svg
                      className="size-10 sm:size-12 md:size-14 text-orange-400"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zm11.31 9.9a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41a.996.996 0 0 0 0 1.41c.38.39 1.02.39 1.41 0zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>
                    </svg>{" "}
                    Líder em
                  </span>{" "}
                  <span className="block text-primary xl:inline">
                    Soluções Solares
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Descubra nossa linha completa de produtos para energia solar.
                  Tudo o que você precisa para tornar seu projeto de energia
                  solar realidade.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button
                      asChild
                      className="w-full h-12 flex gap-2 items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                    >
                      <Link href={routesMap.products}>
                        Nossos Produtos
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/assets/home/hero-background-3.jpg"
            width={1920}
            height={900}
            alt="Banner"
          />
        </div>
      </div>
      <div className="container mt-12 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore nossos produtos
          </h2>
          <p>
            Encontre tudo o que você precisa para o seu projeto de energia
            solar.
          </p>
        </div>
        <div className="text-xl font-bold">
          <ProductCarousel
            data={products[0]}
            title="Estruturas"
            linkSeeAll={hrefCategory("estruturas")}
          />
        </div>
        <div className="text-xl font-bold">
          <ProductCarousel
            data={products[2]}
            title="Inversores"
            linkSeeAll={hrefCategory("inversores")}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
