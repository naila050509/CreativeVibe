import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo-2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Schedule", to: "/schedule" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full h-18 top-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-200" : "bg-white/80 backdrop-blur-md border-b border-transparent"}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-sky-800"
        >
          <img src={Logo} className="w-7 h-7 object-contain" alt="logo" />
          <span className="inline font-semibold">CreativeVibe</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition ${
                location.pathname === item.to
                  ? "text-sky-700 font-medium"
                  : "text-neutral-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-7 h-6 md:hidden flex items-center justify-center"
        >
          {/* line 1 */}
          <span
            className={`absolute w-7 h-[2px] bg-neutral-700 transition-all duration-300 ${
              open ? "rotate-45 translate-y-[0px]" : "-translate-y-2"
            }`}
          />

          {/* line 2 (middle) */}
          <span
            className={`absolute w-7 h-[2px] bg-neutral-700 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* line 3 */}
          <span
            className={`absolute w-7 h-[2px] bg-neutral-700 transition-all duration-300 ${
              open ? "-rotate-45 translate-y-[0px]" : "translate-y-2"
            }`}
          />
        </button>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-7 h-7" alt="logo" />
            <span className="font-semibold text-sky-800">CreativeVibe</span>
          </div>

          {/* Close */}
          <button onClick={() => setOpen(false)} className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-neutral-700 rotate-45"></span>
            <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-neutral-700 -rotate-45"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col p-6 gap-6 mt-4 text-lg">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`${location.pathname === item.to ? "text-sky-700 font-semibold" : "text-neutral-700"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
