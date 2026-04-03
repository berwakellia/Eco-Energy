import React from "react";
import { href, Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-linear-to-r from-green-600 to-emerald-600">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white opacity-80 mb-4">
            Eco-Energy
          </h2>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {navLinks.map((_, index) => (
            <div
              key={index}
              className="w-2.5 h-2.5 rounded-full bg-white shadow-lg"
            ></div>
          ))}
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white font-semibold hover:text-gray-100 transition text-xs md:text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white opacity-30"></div>

      {/* Bottom */}
      <div className="bg-green-700 py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <p className="text-white text-xs font-semibold">
            ecoenergy@gmail.com &copy; {currentYear} EcoEnergy. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-gray-100 transition text-xs font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}