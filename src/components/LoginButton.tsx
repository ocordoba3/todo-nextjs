"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { CiLogin, CiLogout } from "react-icons/ci";

export const LoginButton = () => {
  const { status } = useSession();
  const isLogged = status === "authenticated";
  const sessionButtonTxt = isLogged ? "Logout" : "Log In";

  async function handleSignIn() {
    if (isLogged) {
      await signOut();
    } else {
      await signIn();
    }
  }
  return (
    <button
      onClick={() => handleSignIn()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md  group"
    >
      {isLogged ? <CiLogout /> : <CiLogin />}
      <span className="text-white">{sessionButtonTxt}</span>
    </button>
  );
};
