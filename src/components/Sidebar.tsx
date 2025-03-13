import Image from "next/image";
import React from "react";
import { CiBookmarkCheck, CiBoxList, CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import { FaCookie, FaServer } from "react-icons/fa6";

export const Sidebar = () => {
  const navItems = [
    {
      label: "Dashboard",
      Icon: <CiBookmarkCheck size={30} />,
      href: "/dashboard",
    },
    {
      label: "Rest To Do",
      Icon: <CiBoxList size={30} />,
      href: "/dashboard/rest-todos",
    },
    {
      label: "Server To Do",
      Icon: <FaServer size={30} />,
      href: "/dashboard/server-todos",
    },
    {
      label: "Cookies",
      Icon: <FaCookie size={30} />,
      href: "/dashboard/cookies",
    },
  ];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen bg-[#4C4C4C] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="mt-8 text-center">
          <Image
            src="https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&h=350"
            alt="Profile"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            height={112}
            width={112}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-white lg:block">
            Oscar Córdoba
          </h5>
          <span className="hidden text-white lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            {navItems.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md  group">
          <CiLogout />
          <span className="text-white">Logout</span>
        </button>
      </div>
    </aside>
  );
};
