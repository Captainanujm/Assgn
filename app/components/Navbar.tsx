"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#985CB6] to-[#630C92] text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative">
        <div className="text-xl font-bold tracking-wide">A-Crypto</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 text-m font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveLink(link.label)}
              className={`relative pb-1 cursor-pointer transition 
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            ☰
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#630C92] flex flex-col items-start p-4 gap-2 md:hidden z-50">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveLink(link.label);
                  setMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-2 ${
                  activeLink === link.label ? "font-bold underline" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col w-full gap-2 mt-4">
              <Button variant="outline" className="w-full bg-[#630C92] text-white text-sm">
                Sign In
              </Button>
              <Button className="w-full bg-white text-[#630C92] hover:bg-[#630C92] hover:text-white text-sm">
                Register
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
