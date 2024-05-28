import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex max-md:flex-col-reverse justify-between gap-12 max-w-screen-xl m-auto py-12 px-4">
      <div className="my-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to TokoTok</h1>
        <p className="text-gray-600 text-md mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tellus massa, accumsan eu urna vitae, sollicitudin euismod felis.
          Maecenas dapibus sagittis arcu sed feugiat. Duis auctor sagittis arcu
          sit amet sodales. Duis laoreet faucibus nisl, sed condimentum urna.
          Phasellus velit libero, eleifend vitae pretium sit amet, gravida nec
          sem.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Shop Now
        </button>
      </div>
      <Image
        src="/hero.webp"
        width={500}
        height={300}
        alt="hero"
        className="rounded-lg"
      />
    </section>
  );
}
