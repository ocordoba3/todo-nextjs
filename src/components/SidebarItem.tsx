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
      className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white mb-2 ${
        currentPath === href ? "font-bold bg-[#85C7F2]" : ""
      }`}
    >
      {Icon}
      <span className="-mr-1 font-medium">{label}</span>
    </Link>
  );
};
