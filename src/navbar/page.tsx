"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show background when scrolled more than 50px
      setIsScrolled(currentScrollY > 50);
    };

    const handleResize = () => {
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT ME", href: "#aboutme" },
    { name: "WHAT I DO", href: "#whatido" },
    { name: "CERTIFICATE", href: "#certificate" },
    { name: "PROJECT", href: "#projects" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf"; // path file di folder public
    link.download = "CV-Adit.pdf"; // nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadMobile = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf"; // path file di folder public
    link.download = "CV-Adit.pdf"; // nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Main navbar */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-amber-100 backdrop-blur-sm shadow-sm border-b border-gray-100"
              : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 md:hidden">
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "hidden"
                }`}
              >
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between flex-1">
              <ul className="flex gap-8 lg:gap-12">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`text-sm lg:text-base font-medium transition-colors duration-300 relative group ${
                        isScrolled
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                          isScrolled ? "bg-[#948979]" : "bg-white"
                        }`}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CV Button */}
            <div className="hidden md:block">
              <button
                onClick={handleDownload}
                className="bg-[#948979] text-white px-6 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-[#7a6f5f] transition-all duration-200 flex items-center gap-2 hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                CV
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CV Button */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button
                onClick={handleDownloadMobile}
                className={`w-full bg-[#948979] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#7a6f5f] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${navItems.length * 50}ms`
                    : "0ms",
                }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
