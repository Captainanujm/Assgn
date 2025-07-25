import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";


const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">A-Crypto</h2>
      <p className="text-sm text-gray-300">Trade Crypto easily anytime, anywhere.</p>
      <div className="flex gap-4 mt-2">
       <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
  <FaTelegramPlane className="text-white w-4 h-4" />
</div>
  <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
   <Twitter className="w-5 h-5 text-white cursor-pointer" />
</div>
  <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
   <Linkedin className="w-5 h-5 text-white cursor-pointer" />
</div>
  <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
   <Instagram className="w-5 h-5 text-white  cursor-pointer" />
</div>
       
       
      
      </div>
    </div>
  );
};

export default FooterBrand;
