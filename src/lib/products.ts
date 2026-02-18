import products from "@/data/products.json";
import { Product } from "@/lib/types";

export const allProducts = products as Product[];

export const categories = [
  "Designer",
  "Aroma",
  "Flower",
  "Couple",
  "Laddoo",
  "Festive",
  "Customized"
] as const;

export const getProductById = (id: string) =>
  allProducts.find((product) => product.id === id);
