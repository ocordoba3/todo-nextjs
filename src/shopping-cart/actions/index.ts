import { getCookie, hasCookie, setCookie } from "cookies-next";

export function getCookieCart(): { [id: string]: number } {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
    return cookieCart;
  }

  return {};
}

export function addProductCart(id: string) {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] = cookieCart[id] + 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
}

export function removeProductCart(id: string) {
  const cookieCart = getCookieCart();

  if (cookieCart[id] && cookieCart[id] > 1) {
    cookieCart[id] = cookieCart[id] - 1;
  } else {
    delete cookieCart[id];
  }

  setCookie("cart", JSON.stringify(cookieCart));
}
