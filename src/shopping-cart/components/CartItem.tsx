"use client";

import Image from "next/image";

// import {  } from "../actions/actions";

import { useRouter } from "next/navigation";
import { Product } from "@/products/interfaces";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addProductCart, removeProductCart } from "../actions";

interface Props {
  product: Product;
  quantity: number;
}

export const CartItem = ({ product, quantity }: Props) => {
  const router = useRouter();

  function onAddToCart() {
    addProductCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeProductCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center shadow rounded-lg w-full bg-blue-50 border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={200}
          height={200}
          className="rounded"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5 w-full flex flex-col mt-2">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-gray-900">
            {product.name} -{" "}
            <small className="text-sm">${product.price.toFixed(2)}</small>
          </h3>
        </a>

        {/* Price and Add to Cart */}
        <div className="flex flex-col items-start justify-between">
          <span className="text-gray-900">Cantidad: {quantity}</span>
          <span className="font-bold text-gray-900">
            Total: ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex p-5 items-center justify-center">
        <button
          onClick={onRemoveItem}
          className="text-white p-2 bg-rose-200 hover:bg-rose-300 focus:ring-4 font-medium rounded-lg text-sm text-center"
        >
          <FaMinus size={16} />
        </button>

        <span className="text-black mx-2 font-bold">{quantity ?? 0}</span>

        <button
          onClick={onAddToCart}
          className="text-white p-2 bg-cyan-600 hover:bg-cyan-800 focus:ring-4 font-medium rounded-lg text-sm text-center"
        >
          <FaPlus size={16} />
        </button>
      </div>
    </div>
  );
};
