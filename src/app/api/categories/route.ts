import { api } from "@/lib/axios/api";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categoriesResponse = await api.get("/categories.json");
    return NextResponse.json(categoriesResponse.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
};
