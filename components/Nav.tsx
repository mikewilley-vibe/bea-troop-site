'use client';

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/calendar", label: "Calendar" },
    { href: "/badges", label: "Badges" },
    { href: "/cookies", label: "Cookies" },
    { href: "/switzerland", label: "Switzerland" },
    { href: "/resources", label: "Resources" },
    { href: "/portal", label: "Portal" },
  ];

  return (
    <nav className="text-white shadow-md sticky top-0 z-50" style={{ backgroundColor: '#2D5016' }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="text-xl font-bold">🌼 Troop 21</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-100 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-green-700 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-700 animate-fade-in border-t border-green-600">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-green-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}