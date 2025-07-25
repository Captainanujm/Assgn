import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const FooterBottom = () => {
  return (
    <div className="border-t border-[#BCBCBC] flex flex-col md:flex-row justify-between items-center pt-12 text-center mt-8 px-6 gap-4">
      <p className="text-sm text-gray-400">Copyright 2021, Cryptous</p>
       <div className="flex gap-4">
        <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
          <Facebook className="text-white w-4 h-4" />
        </div>
        <div className="w-9 h-9 flex items-center justify-center bg-[#EB5757] rounded-full cursor-pointer hover:scale-110 transition">
          <Twitter className="text-white w-4 h-4" />
        </div>
        <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
          <Linkedin className="text-white w-4 h-4" />
        </div>
        <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
          <Instagram className="text-white w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
