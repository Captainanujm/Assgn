import React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4E0062] to-[#220076] text-white py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 md:gap-20 lg:gap-32">
      
       
          
      <div className="w-full md:max-w-sm">
    <FooterBrand />
  </div>


        <div className="w-full md:w-1/2">
          <FooterLinks />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
