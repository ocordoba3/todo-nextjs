import { ProductCard } from "@/products/components/ProductCard";
import { products } from "@/products/utils/consts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products page",
  description: "Products implemantation",
};

const ProductsPage = async () => {
  return (
    <>
      <h1 className="text-black mb-4 text-2xl font-bold">Products Page</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
