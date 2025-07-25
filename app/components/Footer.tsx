import React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4E0062] to-[#220076] text-white py-12 px-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="px-4">
            <FooterBrand />
        </div>
        <div className="px-4">
            <FooterLinks />
        </div>
        
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
