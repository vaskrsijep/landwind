"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Can I use FlowBite in open-source projects?",
      answer:
        "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects.",
    },
    {
      question: "Where can I access my download files?",
      answer:
        "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects.",
    },
    {
      question: "Can I use FlowBite for commercial purposes?",
      answer:
        "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects.",
    },
    {
      question: "What about browser support?",
      answer:
        "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. With that being said, feel free to use this design kit for your open-source projects.",
    },
    // Dodaj ostala pitanja i odgovore po potrebi
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="border-b py-10">
            <div className="flex items-center justify-between">
              <button
                className="w-full text-left font-semibold"
                onClick={() => handleClick(index)}
              >
                {item.question}
              </button>
              {activeIndex === index ? (
                <ArrowUp className="text-gray-900" />
              )
              : (
                <ArrowDown className="text-gray-900" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-max-h duration-100 ${
                activeIndex === index ? "max-h-full" : "max-h-0"
              }`}
            >
              <p className="py-2 text-base font-normal text-gray-500">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
