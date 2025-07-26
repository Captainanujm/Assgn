import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const FooterBottom = () => {
  return (
    <div className="border-t border-[#BCBCBC] flex flex-col md:flex-row justify-between items-center pt-8 text-center mt-8 px-4 sm:px-6 gap-4">
      <p className="text-m text-gray-400">
        2021 Cryptous. All rights reserved.
      </p>

      <div className="flex gap-3 sm:gap-4">
        <div className="w-9 h-9 flex items-center border border-[#616161] justify-center bg-transparent rounded-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <Facebook className="text-[#616161] w-5 h-5" />
        </div>
        <div className="w-9 h-9 flex items-center border border-[#616161] justify-center bg-[#EB5757] rounded-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <Twitter className="text-white w-5 h-5" />
        </div>
        <div className="w-9 h-9 flex items-center border border-[#616161] justify-center bg-transparent rounded-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <Linkedin className="text-[#616161] w-5 h-5" />
        </div>
        <div className="w-9 h-9 flex items-center border border-[#616161] justify-center bg-tranparent rounded-md cursor-pointer hover:scale-110 transition-transform duration-200">
          <Instagram className="text-[#616161] w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
