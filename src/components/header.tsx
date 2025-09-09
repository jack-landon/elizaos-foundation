"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "developer", href: "https://docs.elizaos.ai/" },
    { name: "blog", href: "https://elizaos.substack.com/" },
    { name: "X", href: "https://x.com/ElizaEcoFund" },
  ];

  return (
    <div className="ml-2">
      <header className="w-full py-6 lg:px-3 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/header/eliza-header-logo.svg"
            alt="Logo"
            width={370}
            height={25}
            className="z-10 w-[280px] h-[18px] md:w-full md:h-full"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden w-full justify-end space-x-8 md:px-12 lg:flex uppercase text-sm">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className="text-white text-[18px] font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        {!isOpen && (
          <button
            className=" mr-2 lg:hidden cursor-pointer block"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src="/header/hamburger-white.svg"
              alt="Menu Toggle"
              className="w-[25px] h-[20px]"
              width={30}
              height={20}
              unoptimized
              priority
            />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#00071E]/60 backdrop-blur-sm -z-10 flex flex-col justify-items-end items-end justify-center gap-8 text-xl uppercase overflow-hidden lg:hidden">
            <button
              className="absolute mt-1 top-6 right-4 cursor-pointer z-10"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <Image
                src="/header/close.svg"
                alt="Close Menu"
                className="w-[30px] h-[20px]"
                width={30}
                height={20}
                priority
              />
            </button>
            <div className="flex flex-col items-end gap-8 space-y-4 pr-8 z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-white text-[28px] font-bold"
                  onClick={() => setIsOpen(false)}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
