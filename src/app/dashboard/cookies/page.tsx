import { TabBar } from "@/components/TabBar";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

export const metadata: Metadata = {
  title: "Cookies page",
  description: "Cookies implemantation",
};

const CookiesPage = async () => {
  const cookieStore = await cookies();
  const cookieTab = cookieStore.get("selectedTab");

  return (
    <>
      <h1 className="text-black mb-4 text-2xl font-bold">Cookies Page</h1>
      <TabBar initialTab={cookieTab?.value || ""} />
    </>
  );
};

export default CookiesPage;
