"use client";

import Image from "next/image";
import { useState } from "react";
import type { Item, ItemProps } from "./models/types";
import Modal from "../Modal";

export default function ProductItem({ data }: ItemProps) {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <>
      {data?.map((item, idx) => (
        <div
          key={item.id}
          onClick={() => setSelected(item)}
          data-testid={`product-item-${idx}`}
          className="border rounded-lg transition hover:shadow-md overflow-hidden"
        >
          <div className="relative cursor-pointer">
            <Image
              width={500}
              height={400}
              placeholder="blur"
              blurDataURL="/placeholder.webp"
              src={item.image}
              alt={item.name || `image-${idx}`}
              className="w-full h-32 object-cover"
            />
            <span className="absolute top-0 py-2 px-4 bg-green-500 gap-4 text-white rounded-br-lg text-sm">
              {item.id}
            </span>
          </div>
          <div className="p-2 flex flex-col gap-2 cursor-pointer">
            <h6 className="font-semibold text-md truncate">
              {item.name || "Unknown"}
            </h6>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      ))}
      <Modal
        open={Boolean(selected)}
        title={selected?.name || "Unknown"}
        onClose={() => setSelected(null)}
      >
        <Image
          width={500}
          height={400}
          src={selected?.image || ""}
          alt={selected?.name || "Unknown"}
          className="rounded-xl"
        />
      </Modal>
    </>
  );
}
