"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hikaye", label: "Hikayesi" },
  { href: "#tedavi", label: "Tedavi" },
  { href: "#bagis", label: "Bağış Yap" },
  { href: "#belgeler", label: "Belgeler" },
  { href: "/destek", label: "Destek Ver" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-primary">
          DMD Şenol Berk
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#bagis"
            className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-light transition-colors animate-pulse-glow"
          >
            Bağış Yap
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Menü"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-50"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#bagis"
              onClick={() => setOpen(false)}
              className="block text-center bg-accent text-white px-4 py-3 rounded-full font-semibold"
            >
              Bağış Yap
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
