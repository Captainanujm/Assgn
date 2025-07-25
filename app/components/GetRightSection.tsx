import React from 'react';
import { Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const GetRightSection = () => {
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-6">
      <div className="w-full h-[250px] bg-purple-300/50 rounded-xl"></div>

      <div className="flex items-start gap-4">
       <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#630C92] rounded-full">
  <Phone className="text-white w-6 h-6" />
</div>
        <div>
          <p className="text-m font-semibold text-gray-700">Phone Number</p>
          <p className="text-gray-600">+123 456 789 101</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
       <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#630C92] rounded-full">
  <Clock className="text-white w-6 h-6" />
</div>

        <div>
          <p className="text-m font-semibold text-gray-700">Business Hours</p>
          <p className="text-gray-600">Monday – Friday / 8AM to 5PM</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-m font-semibold text-gray-700 mb-2">Follow Us:</p>
       <div className="flex gap-4">
  <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
    <Facebook className="text-white w-4 h-4" />
  </div>
  <div className="w-9 h-9 flex items-center justify-center bg-[#630C92] rounded-full cursor-pointer hover:scale-110 transition">
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
    </div>
  );
};

export default GetRightSection;
