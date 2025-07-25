"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#985CB6] to-[#630C92] text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
       
        <div className="text-xl font-bold tracking-wide">A-Crypto</div>

       
        <div className="hidden md:flex gap-7 text-m font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveLink(link.label)}
              className={`relative pb-1 transition 
                ${
                  activeLink === link.label
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "opacity-80 hover:opacity-100"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Button
            variant="outline"
            className="cursor-pointer bg-[#630C92] text-white hover:bg-gray-100 text-sm"
          >
            Sign In
          </Button>
          <Button className="cursor-pointer bg-white hover:bg-[#630C92] hover:border border-white hover:text-white text-[#630C92] text-sm">
            Register
          </Button>
        </div>
      </nav>
    </header>
  );
}
