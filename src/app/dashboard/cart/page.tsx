import { products } from "@/products/utils/consts";
import { CartItem } from "@/shopping-cart/components/CartItem";
import { cookies } from "next/headers";
import React from "react";

const CartPage = async () => {
  const cookieStore = await cookies();
  const cart: { [id: string]: number } = JSON.parse(
    cookieStore.get("cart")?.value ?? "{}"
  );
  const items = Object.keys(cart);

  return (
    <>
      <h1 className="text-black mb-4 text-2xl font-bold">Cart</h1>
      <div className="flex flex-wrap gap-y-4">
        {items.map((el) => (
          <CartItem
            key={el}
            product={products.find((product) => product.id === el)!}
            quantity={cart[el]}
          />
        ))}
      </div>
    </>
  );
};

export default CartPage;
