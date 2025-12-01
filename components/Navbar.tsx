"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Facebook, Instagram, PanelsTopLeft, ChevronDown } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import { getCategorySlugByName } from "@/lib/categoriesData";

const categories = [
  "T-Shirts",
  "Polo",
  "Shirts & Formal Wear",
  "Suits & Blazers",
  "Security Uniforms",
  "Jackets & Vests",
  "Chef & Kitchen Wear",
  "Hospital & Housekeeping wear",
  "Aprons",
  "School",
  "Maintenance",
  "Sweater",
  "Accessories"
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  const isCategoryPage = pathname?.startsWith('/category/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isContactPage || isCategoryPage
          ? 'bg-white dark:bg-neutral-900 shadow-sm'
          : scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 ${
          isContactPage || isCategoryPage ? "py-2" : scrolled ? "py-2" : "py-4"
        } md:px-6 transition-[padding] duration-300 ${
          isContactPage || isCategoryPage
            ? "text-neutral-900 dark:text-white"
            : scrolled
            ? "text-neutral-900 dark:text-white"
            : "text-white"
        }`}
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center">
          <div
            className={`flex items-center justify-center rounded-2xl p-1.5 transition-all ${
              isContactPage || isCategoryPage
                ? "bg-gradient-to-br from-[#DA0037]/15 to-transparent shadow-sm ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
                : scrolled
                ? "bg-gradient-to-br from-[#DA0037]/15 to-transparent shadow-sm ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
                : "bg-white shadow-md ring-1 ring-white/20"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Squadlink Logo"
              width={100}
              height={100}
              priority
              sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
              className={`${
                isContactPage || isCategoryPage
                  ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  : scrolled
                  ? "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  : "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
              } rounded-lg object-cover transition-[width,height] duration-300`}
            />
          </div>
        </div>

        {/* Center: Links (desktop) */}
        <ul className="hidden md:flex md:gap-8 lg:gap-10">
          {[
            ["Home", "/"],
            ["About", "/about"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                  isContactPage || isCategoryPage
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : scrolled
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {label}
              </Link>
            </li>
          ))}
          
          {/* Categories with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setCategoriesDropdownOpen(true)}
            onMouseLeave={() => setCategoriesDropdownOpen(false)}
          >
            <button
              className={`relative flex items-center gap-1 text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                isContactPage || isCategoryPage
                  ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                  : scrolled
                  ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                  : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
              } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
            >
              Categories
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${categoriesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {categoriesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-[#EDEDED] overflow-hidden z-50"
                >
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-[#DA0037]/10 via-[#DA0037]/10 to-[#DA0037]/10 px-4 py-3 border-b border-[#EDEDED]">
                    <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wide">Browse Categories</h3>
                  </div>
                  
                  <div className="grid grid-cols-2">
                    {/* First Column - 6 items */}
                    <div className="py-2">
                      {categories.slice(0, 6).map((category, index) => (
                        <Link
                          key={category}
                          href={`/category/${getCategorySlugByName(category)}`}
                          className="group relative block px-5 py-3 text-sm font-medium text-[#171717] hover:bg-gradient-to-r hover:from-[#DA0037]/10 hover:to-transparent hover:text-[#DA0037] transition-all duration-200"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            {category}
                          </span>
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DA0037] to-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      ))}
                    </div>
                    
                    {/* Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#EDEDED] to-transparent" />
                    
                    {/* Second Column - 7 items */}
                    <div className="py-2 border-l border-[#EDEDED]">
                      {categories.slice(6).map((category, index) => (
                        <Link
                          key={category}
                          href={`/category/${getCategorySlugByName(category)}`}
                          className="group relative block px-5 py-3 text-sm font-medium text-[#171717] hover:bg-gradient-to-r hover:from-[#DA0037]/10 hover:to-transparent hover:text-[#DA0037] transition-all duration-200"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            {category}
                          </span>
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DA0037] to-[#DA0037] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {[
            ["Our Clients", "/clients"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-[0.95rem] lg:text-[1rem] font-semibold tracking-wide transition-colors ${
                  isContactPage || isCategoryPage
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : scrolled
                    ? "text-neutral-900 dark:text-white hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                    : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] hover:text-white"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#DA0037] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Phone pill + icons (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+96181366073"
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors shadow-sm ${
              isContactPage || isCategoryPage
                ? "bg-[#DA0037] text-white hover:bg-[#DA0037]"
                : scrolled
                ? "bg-[#DA0037] text-white hover:bg-[#DA0037]"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#DA0037]">
              <Phone size={16} />
            </span>
            <span>961 81 366073</span>
          </a>
          <div className="ml-3 flex items-center gap-4 border-l border-white/20 pl-4 text-lg">
            <Link aria-label="Facebook" href="https://www.facebook.com" className="transition-transform hover:scale-105">
              <Facebook size={18} />
            </Link>
            <Link aria-label="Instagram" href="https://www.instagram.com" className="transition-transform hover:scale-105">
              <Instagram size={18} />
            </Link>
            <Link aria-label="TikTok" href="https://www.tiktok.com" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiTiktok className="h-[18px] w-[18px]" />
            </Link>
            <Link aria-label="WhatsApp" href="https://wa.me/96181366073" target="_blank" className="transition-transform hover:scale-105" rel="noopener noreferrer">
              <SiWhatsapp className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <PanelsTopLeft />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden transition-all duration-300 ${
            isContactPage || isCategoryPage
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg"
              : scrolled 
              ? "bg-white dark:bg-neutral-900 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg" 
              : "bg-white/95 backdrop-blur-md text-neutral-900 shadow-lg"
          }`}
        >
          <div className="space-y-6 px-6 pb-8 pt-4">
            <div className="flex items-center justify-center py-2">
              <Image src="/logo.png" alt="Revive Wellness Center" width={64} height={64} className="h-14 w-14 rounded-full object-cover" />
            </div>
            <ul className={`divide-y ${isContactPage || isCategoryPage ? "divide-neutral-200 dark:divide-neutral-700" : scrolled ? "divide-neutral-200 dark:divide-neutral-700" : "divide-white/20"}`}>
              <li>
                <Link 
                  href="/"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  className={`w-full flex items-center justify-between py-3 px-6 text-lg transition-colors ${
                    isContactPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`}
                >
                  Categories
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${categoriesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {categoriesDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#EDEDED]/50 overflow-hidden max-h-[200px] overflow-y-auto"
                    >
                      {categories.map((category) => (
                        <li key={category}>
                          <Link
                            href={`/category/${getCategorySlugByName(category)}`}
                            className={`block py-2.5 px-10 text-base transition-colors ${
                              isContactPage
                                ? "text-neutral-600 dark:text-neutral-400 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                                : scrolled 
                                ? "text-neutral-600 dark:text-neutral-400 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                                : "text-neutral-600 hover:text-[#DA0037]"
                            }`}
                            onClick={() => {
                              setMenuOpen(false);
                              setCategoriesDropdownOpen(false);
                            }}
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link 
                  href="/clients"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className={`block py-3 px-6 text-lg transition-colors ${
                    isContactPage || isCategoryPage
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]"
                      : scrolled 
                      ? "text-neutral-700 dark:text-neutral-300 hover:text-[#DA0037] dark:hover:text-[#DA0037]" 
                      : "text-neutral-700 hover:text-[#DA0037]"
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="tel:+96181366073"
              className="inline-flex items-center gap-2 rounded-full bg-[#DA0037] px-6 py-3 text-base text-white shadow-sm mx-6"
            >
              <Phone size={16} /> <span>961 81 366 073</span>
            </a>
            <div className={`flex items-center gap-5 border-t pt-4 text-lg mx-6 ${isContactPage || isCategoryPage ? "border-neutral-200 dark:border-neutral-700" : scrolled ? "border-neutral-200 dark:border-neutral-700" : "border-white/20"}`}>
              <Link aria-label="Facebook" href="https://www.facebook.com" className="transition-transform hover:scale-105"><Facebook size={20} /></Link>
              <Link aria-label="Instagram" href="https://www.instagram.com" className="transition-transform hover:scale-105"><Instagram size={20} /></Link>
              <Link aria-label="TikTok" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiTiktok className="h-[20px] w-[20px]" /></Link>
              <Link aria-label="WhatsApp" href="https://wa.me/96181366073" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105"><SiWhatsapp className="h-[20px] w-[20px]" /></Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
