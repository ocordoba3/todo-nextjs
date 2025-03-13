"use client";

import { setCookie } from "cookies-next";
import React, { useState } from "react";

const tabOptions = [
  "Profile",
  "Preferences",
  "Notifications",
  "Applications",
  "API",
];

interface Props {
  initialTab?: string;
}

export const TabBar = ({ initialTab = "Profile" }: Props) => {
  // CLIENT SIDE
  //   const cookieTab = getCookie("selectedTab");
  //   console.log(cookieTab);
  const [activeTab, setActiveTab] = useState(initialTab);

  function handleSelection(tab: string) {
    setActiveTab(tab);
    setCookie("selectedTab", tab);
  }

  // CLIENT SIDE
  //   useEffect(() => {
  //     if (cookieTab) {
  //       setActiveTab(cookieTab.toString());
  //     }
  //   }, [cookieTab]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1">
      <ul className="flex items-center gap-2 text-sm font-medium">
        {tabOptions.map((tab) => (
          <li key={tab} className="flex-1">
            <a
              onClick={() => handleSelection(tab)}
              className={`${
                activeTab === tab ? "bg-white shadow font-bold" : ""
              } transition-all cursor-pointer text-black relative flex items-center justify-center gap-2 rounded-lg px-3 py-2  hover:bg-white hover:text-gray-700`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
