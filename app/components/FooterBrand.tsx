import { X } from "lucide-react";
import { FaTelegramPlane, FaFacebookF, FaYoutube, FaTimes } from "react-icons/fa";
import { SiX } from "react-icons/si";


const FooterBrand = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white">A-Crypto</h2>
      <p className="text-sm md:text-base text-gray-300">
        Trade Crypto easily anytime, anywhere.
      </p>

      <div className="flex gap-[10px] mt-2 flex-wrap justify-center">
        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#EFE7F4] to-[#CFB4DD] 
                      cursor-pointer hover:scale-105 transition-transform duration-200">
          <FaTelegramPlane className="text-[#630C92] w-[14px] h-[14px]" />
        </div>

        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#EFE7F4] to-[#CFB4DD] 
                      cursor-pointer hover:scale-105 transition-transform duration-200">
          <FaFacebookF className="text-[#630C92] w-[14px] h-[14px]" />
        </div>

       
        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#EFE7F4] to-[#CFB4DD] 
                      cursor-pointer hover:scale-105 transition-transform duration-200">
          <FaYoutube className="text-[#630C92] w-[14px] h-[14px]" />
        </div>

       
        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#EFE7F4] to-[#CFB4DD] 
                      cursor-pointer hover:scale-105 transition-transform duration-200">
          <SiX className="text-[#630C92] w-[14px] h-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;
