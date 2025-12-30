"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Books", href: "#books" },
    { name: "Authors", href: "#authors" },
    { name: "Essays", href: "#essays" },
    { name: "Events", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-sm py-4 border-b border-[#E2E8F0]" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="z-50 relative hover:opacity-80 transition-opacity duration-200 cursor-pointer group">
          <Image
            src="/logo.svg"
            alt="Bellwether"
            width={151}
            height={28}
            className="transition-transform group-hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#0F172B] hover:text-[#FF6321] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <Button className="ml-2 font-heading rounded-none bg-[#FF6321] hover:bg-[#E55A1A] text-white transition-colors" onClick={() => window.location.href = '/signup'}>
            Submit Manuscript
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white pt-24 px-6 md:hidden flex flex-col space-y-8 h-screen"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-heading font-medium text-[#0F172B]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 border-t border-[#E2E8F0] flex flex-col space-y-4">
              <Button className="w-full justify-start text-lg text-[#0F172B]" variant="ghost">
                <Search className="mr-2 w-5 h-5" /> Search
              </Button>
              <Button className="w-full justify-start text-lg text-[#0F172B]" variant="ghost">
                <ShoppingBag className="mr-2 w-5 h-5" /> Cart (0)
              </Button>
              <Button className="w-full rounded-none mt-4 bg-[#FF6321] hover:bg-[#E55A1A] text-white" onClick={() => window.location.href = '/signup'}>Submit Manuscript</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
