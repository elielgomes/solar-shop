import { NextResponse } from "next/server";
import { api } from "@/lib/axios/api";
import { Category, Product } from "@/interfaces";
import { enrichProductWithCategory } from "@/app/api/products/route";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const productsResponse = await api.get<Product[]>("/products.json");

    const result = productsResponse.data.find(
      (product) => product.id === params.id
    );

    if (result) {
      const categoriesResponse = await api.get<Category[]>("/categories.json");
      const enrichedProduct = enrichProductWithCategory(
        result,
        categoriesResponse.data
      );

      return NextResponse.json(enrichedProduct);
    } else {
      return NextResponse.json(
        { message: "Produto não encontrado" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
};
