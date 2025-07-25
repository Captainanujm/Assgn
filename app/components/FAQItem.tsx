"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg text-gray-800">{question}</h4>
        <ChevronDown
          className={`transition-transform ${
            open ? "rotate-180" : ""
          } text-gray-500`}
        />
      </div>
      {open && <p className="text-m text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};

export default FAQItem;
