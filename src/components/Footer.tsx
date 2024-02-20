import { Dribbble, Facebook, GitBranchPlus, Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
type Links = {
  Title: string;
  Links: string[];
}

const links: Links[] = [
  {
    Title: "Company",
    Links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
  },
  {
    Title: "Help And Support",
    Links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"]
  },
  {
    Title: "Learning",
    Links: ["Learn Hub", "Manuals", "Tutorials", "Communities"]
  },
  {
    Title: "Resources",
    Links: ["Third-Party Tools", "Illustrations", "Themesberg", "Bluehost", "Stock Photos"]
  },
  {
    Title: "Legal",
    Links: ["Privacy Policy", "Terms & Conditions", "EULA", "Refund Policy"]
  },

];

const Footer = () => {
  return <div id="footer" className="max-w-7xl mx-auto flex items-center justify-center py-10 flex-col gap-0">
    <div className="w-full flex items-start justify-between">
      {links.map((link) => (
        <div key={link.Title} className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase text-gray-900">{link.Title}</p>
            {link.Links.map((link) => (
              <a href="#footer" className="text-base font-normal text-gray-500 hover:text-gray-800 transition duration-200 cursor-pointer" key={link}>{link}</a>
            ))}
        </div>
      ))}
    </div>
    <Image src="/images/full-logo.png" alt="logo" width={140} height={40} className="mt-20"/>
    <p className="text-base text-gray-500 my-5">© 2024 Landwind. All rights reserved.</p>
    <div className="flex items-center justify-center flex-row gap-10">
      <Github className="w-5 h-5 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"/>
      <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"/>
      <Dribbble className="w-5 h-5 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"/>
      <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"/>
    </div>
  </div>
};

export default Footer;
