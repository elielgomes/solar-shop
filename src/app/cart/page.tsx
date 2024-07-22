"use client";

import React from "react";
import { NextPage } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { routesMap } from "@/constants/routes-map";
import { formatCurrency } from "@/helpers/format-currency";
import { ProductListItem } from "@/app/cart/_components/product-list-item";

const CartPage: NextPage = () => {
  const cartStore = useCartStore();

  const subTotal = cartStore.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const taxesEstimate = subTotal * 0.005;
  const shippingEstimate = subTotal * 0.01;
  const total = subTotal + taxesEstimate + shippingEstimate;

  return (
    <main className="flex min-h-screen my-16 md:mt-28">
      <div className="container mt-12 space-y-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={routesMap.home}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Carrinho</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Carrinho de compras</h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items em seu carrinho de compras
              </h2>
              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {cartStore.products.length > 0 ? (
                  cartStore.products.map((product) => (
                    <ProductListItem key={product.id} data={product} />
                  ))
                ) : (
                  <li className="flex py-6 sm:py-10">
                    <div className="flex-1">
                      <p className="text-center text-lg text-gray-500">
                        Seu carrinho está vazio.
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </section>
            <aside
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 sticky top-32"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Resumo da compra
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(subTotal)}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Taxa de entrega</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Saiba mais sobre como o frete é calculado
                      </span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(shippingEstimate)}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <div className="flex text-sm text-gray-600">
                    <span>Imposto calculado</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Saiba mais sobre como os impostos são calculados
                      </span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(taxesEstimate)}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <div className="text-base font-medium text-gray-900">
                    Total
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    {formatCurrency(total)}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button type="button" className="w-full">
                  Checkout
                </Button>
              </div>
            </aside>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
