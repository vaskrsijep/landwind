import { Globe, Server, ShoppingBag, Users } from "lucide-react";
import React from "react";

const SocialProof = () => {
  return (
    <div className="flex justify-between items-center py-20">
      <div className="flex md:flex-row flex-col items-start justify-between gap-20">
        <div className="flex flex-col gap-2">
          <p className="leading-none text-lg font-medium text-purple-600">Trusted Worldwide</p>
          <h2 className="leading-tight text-4xl font-extrabold text-gray-900">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className="text-light text-xl text-gray-500">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <span className="border border-gray-200 my-5" />
          <a className="text-purple-600 leading-none text-base font-medium" href="">Explore Legality Guide &rarr;</a>
          <a className="mt-2 text-purple-600 leading-none text-base font-medium" href="">Visit the Trust Center &rarr;</a>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-3 items-start w-1/2 mb-10">
            <Server className="w-8 h-8 text-purple-600" />
            <h3 className="leading-tight text-2xl font-bold">99.99% uptime</h3>
            <p className="text-base text-gray-500 font-light">for Flowbite, with zero maintenance downtime</p>
          </div>
          <div className="flex flex-col gap-3 items-start w-1/2">
            <Users className="w-8 h-8 text-purple-600" />
            <h3 className="leading-tight text-2xl font-bold">600M+ Users</h3>
            <p className="text-base text-gray-500 font-light">trusted by over 600 milion users around the world</p>
          </div>
          <div className="flex flex-col gap-3 items-start w-1/2">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <h3 className="leading-tight text-2xl font-bold">Millions</h3>
            <p className="text-base text-gray-500 font-light">of transactions per day</p>
          </div>
          <div className="flex flex-col gap-3 items-start w-1/2">
            <Globe className="w-8 h-8 text-purple-600" />
            <h3 className="leading-tight text-2xl font-bold">100+ countries</h3>
            <p className="text-base text-gray-500 font-light">have used Flowbite to create functional websites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
