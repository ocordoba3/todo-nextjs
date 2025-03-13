"use client";

import React from "react";
import { Product } from "../interfaces";
import Image from "next/image";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import {
  addProductCart,
  getCookieCart,
  removeProductCart,
} from "@/shopping-cart/actions";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const cart = getCookieCart();
  const quantity = cart[product.id];
  const router = useRouter();

  function handleAdd() {
    addProductCart(product.id);
    router.refresh();
  }

  function handleRemove() {
    removeProductCart(product.id);
    router.refresh();
  }

  return (
    <div className="w-full bg-white p-3 rounded-lg">
      <Image
        alt={product.name}
        height={500}
        width={500}
        className="h-52 w-full object-cover"
        src={product.image}
      />
      <ul className="mt-3 flex flex-wrap gap-y-2">
        <li className="mr-auto text-gray-900 font-semibold text-lg tracking-tight">
          {product.name}
        </li>
        <li className="text-gray-400 w-full flex items-center">
          {Array.from({ length: product.rating }).map((_, i) => (
            <FaStar className="text-cyan-800" size={16} key={i} />
          ))}
          <span className="bg-gray-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4">
            {product.rating}.0
          </span>
        </li>
        <li className="flex justify-between w-full">
          <span className="text-gray-900 font-semibold text-2xl">
            {product.price} USD
          </span>
        </li>
        <li className="flex w-full items-center h-8">
          <button
            onClick={handleRemove}
            className="text-white p-2 bg-rose-200 hover:bg-rose-300 focus:ring-4 font-medium rounded-lg text-sm text-center"
          >
            <FaMinus size={16} />
          </button>

          <span className="text-black mx-2 font-bold">{quantity ?? 0}</span>

          <button
            onClick={handleAdd}
            className="text-white p-2 bg-cyan-600 hover:bg-cyan-800 focus:ring-4 font-medium rounded-lg text-sm text-center"
          >
            <FaPlus size={16} />
          </button>
        </li>
      </ul>
    </div>
  );
};
