"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  Icon: ReactNode;
}

export const SidebarItem = ({ href, label, Icon }: Props) => {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl  mb-2 ${
        currentPath === href
          ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
          : "text-black"
      }`}
    >
      {Icon}
      <span className="-mr-1 font-medium">{label}</span>
    </Link>
  );
};
