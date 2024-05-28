import { Suspense } from "react";
import Item from "./components/Item";
import useProduct from "./useCases/useProduct";

export default async function Product() {
  const { data } = await useProduct();

  return (
    <section className="max-w-screen-xl m-auto px-4 py-12">
      <h1 className="text-center text-xl font-bold mb-2">Available Products</h1>
      <p className="text-center text-gray-600 text-md mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        fermentum pharetra blandit.
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6 max-sm:gap-4">
          <Item data={data} />
        </div>
      </Suspense>
    </section>
  );
}
