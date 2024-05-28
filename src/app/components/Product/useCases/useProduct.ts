import { getImages, getProducts } from "../services/giovankov";

export default async function useProduct() {
  const { data: products } = await getProducts();
  const { data: images } = await getImages();

  const data = products?.map((item) => {
    const image = images?.find((image) => image.id.includes(item.id));
    return { ...item, image: image?.image || "/placeholder.webp" };
  });

  return { data };
}
