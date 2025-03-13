import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const TopMenu = async () => {
  const cookieStore = await cookies();
  const cart: { [id: string]: number } = JSON.parse(
    cookieStore.get("cart")?.value ?? "{}"
  );
  const items = Object.values(cart).reduce((acc, curr) => curr + acc, 0);

  return (
    <div className="sticky z-10 top-0 h-16 bg-[#292929] lg:py-2.5">
      <div className="px-6 flex items-center justify-end space-x-4">
        <Link
          href="/dashboard/cart"
          className="relative flex items-center justify-center p-2 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        >
          <AiOutlineShoppingCart color="black" size={20} />
          {items > 0 && (
            <span className="absolute -bottom-3 -right-3 bg-blue-400 text-black font-bold rounded-full px-2 py-1 text-xs">
              {items}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
