import { Check } from "lucide-react";
import React from "react";

const packages = [
  {
    title: "Starter",
    description: "Great for personal use and for your side projects.",
    price: "49€",
    offers: [
      "Individual configuration",
      "No setup, monthly, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      
      "Free updates: 6 months",
    ],
    buttonLabel: "Get started",
  },
  {
    title: "Company",
    description: "Great for personal use and for your side projects.",
    price: "99€",
    offers: [
      "Individual configuration",
      "No setup, monthly, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      
      "Free updates: 6 months",
    ],
    buttonLabel: "Get started",
  },
  {
    title: "Enterprise",
    description: "Great for personal use and for your side projects.",
    price: "499€",
    offers: [
      "Individual configuration",
      "No setup, monthly, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      
      "Free updates: 6 months",
    ],
    buttonLabel: "Get started",
  },
];
const Pricing = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
          Pay as you grow
        </h2>
        <p className="text-xl font-normal text-gray-500">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex items-center justify-between gap-5">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col justify-center border border-gray-200 rounded-md py-7 px-5 shadow-md gap-4">
              <h2 className="text-lg font-bold">{pkg.title}</h2>
              <p className="text-lg text-gray-500 font-normal">{pkg.description}</p>
              <p className="text-gray-900 leading-none text-5xl font-extrabold">{pkg.price} <span className="text-gray-500 text-lg font-medium">/month</span></p>
              <ul className="flex flex-col gap-3">
                {pkg.offers.map((offer, index) => (
                  <li className="flex items-center justify-start gap-3" key={index}><Check className="w-4 h-4 text-green-600"/>{offer}</li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white text-sm font-medium rounded-md py-2 px-3">
                {pkg.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
