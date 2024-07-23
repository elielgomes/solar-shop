import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { routesMap } from "@/constants/routes-map";

const NotFound: NextPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:relative mt-16 md:mt-28">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow  flex flex-col container">
            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Error 404
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl xl:text-5xl">
                Página não encontrada
              </h1>
              <p className="mt-2 text-base text-gray-500 max-w-sm">
                Lamentamos, mas não conseguimos encontrar a página que procura.
              </p>
              <div className="mt-6">
                <Link
                  href={routesMap.home}
                  className="text-base font-medium text-primary hover:text-primary/70"
                >
                  Voltar para Home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <div className="flex-shrink-0 bg-gray-50">
          <div className="py-16 container">
            <nav className="flex space-x-4">
              <Link
                href={routesMap.home}
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Home
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                href={routesMap.about}
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Sobre
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                href={routesMap.products}
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Produtos
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/home/hero-background-3.jpg"
          width={1920}
          height={900}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default NotFound;
