import {
  Dribbble,
  Facebook,
  GitBranchPlus,
  Github,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
type Links = {
  Title: string;
  Links: string[];
};

const links: Links[] = [
  {
    Title: "Company",
    Links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
  },
  {
    Title: "Help And Support",
    Links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
  },
  {
    Title: "Learning",
    Links: ["Learn Hub", "Manuals", "Tutorials", "Communities"],
  },
  {
    Title: "Resources",
    Links: [
      "Third-Party Tools",
      "Illustrations",
      "Themesberg",
      "Bluehost",
      "Stock Photos",
    ],
  },
  {
    Title: "Legal",
    Links: ["Privacy Policy", "Terms & Conditions", "EULA", "Refund Policy"],
  },
];

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-900 w-full mx-auto flex flex-col items-center rounded-t-lg py-10">
      <div className="flex items-center justify-between">

      <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-20 sm:gap-20 py-10 sm:py-0">
        {links.map((linkGroup) => (
          <div
            key={linkGroup.Title}
            className="flex flex-col gap-5"
          >
            <p className="text-sm font-semibold uppercase text-gray-200 mt-10 lg:mt-0">
              {linkGroup.Title}
            </p>
            <div className="flex flex-col">
              {linkGroup.Links.map((link) => (
                <a
                  href="#footer"
                  className="text-base font-normal text-gray-500 hover:text-gray-200 transition duration-200 cursor-pointer mr-4 mb-2"
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={100}
        height={40}
        className="mt-20 hover:rotate-180 transition duration-300 cursor-pointer"
      />
      <p className="text-base text-gray-500 my-5">
        © 2024 Landwind. All rights reserved.
      </p>
      <div className="flex items-center justify-center flex-row gap-10">
        <Github className="w-5 h-5 text-gray-500 hover:text-gray-200 hover:scale-110 transition duration-300 cursor-pointer" />
        <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-200 hover:scale-110 transition duration-300 cursor-pointer" />
        <Dribbble className="w-5 h-5 text-gray-500 hover:text-gray-200 hover:scale-110 transition duration-300 cursor-pointer" />
        <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-200 hover:scale-110 transition duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
