"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  HomeIcon,
  Menu,
  Search,
  ShoppingBagIcon,
  SidebarClose,
  Users2,
  X,
} from "lucide-react";
import Hamburger from "hamburger-react";
export const routes = [
  {
    title: "Home",
    href: "#",
    Icon: HomeIcon,
  },
  {
    title: "Explore",
    href: "#",
    Icon: Search,
  },
  {
    title: "Pricing",
    href: "#",
    Icon: ShoppingBagIcon,
  },
  {
    title: "About",
    href: "#",
    Icon: Users2,
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-row justify-between items-center py-5">
      <div className="flex items-center justify-center gap-3">
        <Image src="/images/logo.svg" alt="logo" width={20} height={20} />
        <p className="text-2xl font-semibold">Landwind</p>
      </div>
      <div className="lg:flex items-center justify-center gap-10 hidden">
        <div className="flex items-center justify-center gap-10">
          {routes.map((route, index) => (
            <a key={index} href={route.href} className="text-base font-medium">
              {route.title}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="text-sm font-medium ">
          Log in
        </a>
        <button className="bg-purple-600 text-white text-sm font-medium rounded-md py-2 px-3">
          Get Started
        </button>
      </div>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        {isOpen && (
        <div className="bg-gray-50 fixed left-0 right-0 w-full h-full">
          <ul className="grid gap-2">
            {routes.map((route) => {
              const { Icon } = route;

              return (
                <li
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl"
                >
                  <a
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-5 rounded-xl text-gray-900"
                    }
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg">{route.title}</span>
                    <Icon className="text-xl" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
