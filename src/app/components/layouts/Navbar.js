"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f5f5dc] text-black z-50 shadow-md transition-transform duration-300 translate-y-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Utterlink logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-green-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-700 font-medium">
              About
            </Link>
            <Link href="/services" className="hover:text-green-700 font-medium">
              Services
            </Link>
            <Link href="/faq" className="hover:text-green-700 font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-green-700 font-medium">
              Contact
            </Link>
            <Link href="/contact">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold">
                Get Connected
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f5dc] px-4 pt-2 pb-4 space-y-3 shadow-md">
          <Link
            href="/"
            className="block hover:text-green-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block hover:text-green-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block hover:text-green-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/faq"
            className="block hover:text-green-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block hover:text-green-700 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold">
              Get Connected
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
