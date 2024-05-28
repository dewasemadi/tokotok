import type { Images, Products } from "../models/types";

export const BASE_URL = "https://www.giovankov.com/api";

export async function getProducts(): Promise<Products> {
  const res = await fetch(`${BASE_URL}/product.json`);
  if (!res.ok) throw new Error("Failed to fetch product list");
  return res.json();
}

export async function getImages(): Promise<Images> {
  const res = await fetch(`${BASE_URL}/image.json`);
  if (!res.ok) throw new Error("Failed to fetch image list");
  return res.json();
}
