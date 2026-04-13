"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Website Design", href: "/website-design" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Apply frosted-glass class once the user scrolls down */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Close the mobile menu whenever the route changes */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main navigation bar ─────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-scrolled" : "bg-deep-indigo"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 font-syne font-bold text-xl tracking-tight">
            <span style={{ color: "var(--coral)" }}>Pure</span>
            <span className="text-white">&nbsp;Publishing</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-nunito text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-coral"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            {/* CTA — visible on desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full font-nunito font-bold text-sm text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: "var(--coral)" }}
            >
              Book a Free Chat
            </Link>

            {/* Hamburger — visible on mobile */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 text-white focus:outline-none ${
                menuOpen ? "hamburger-open" : ""
              }`}
            >
              <span className="hamburger-bar bar-top" />
              <span className="hamburger-bar bar-middle" />
              <span className="hamburger-bar bar-bottom" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile overlay menu ─────────────────────────────── */}
      {/*
        The overlay uses CSS transitions driven by the `menuOpen` boolean.
        Links slide in with staggered animation delays.
      */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--deep-indigo)" }}
      >
        <ul className="flex flex-col items-center gap-8 list-none">
          {navLinks.map(({ label, href }, index) => {
            const isActive = pathname === href;
            const delay = 80 + index * 60; // staggered: 80, 140, 200, 260, 320 ms
            return (
              <li
                key={href}
                className="transition-all duration-500"
                style={{
                  transitionDelay: menuOpen ? `${delay}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-syne font-bold text-3xl tracking-tight transition-colors duration-200 ${
                    isActive ? "text-coral" : "text-white hover:text-coral"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile CTA */}
        <div
          className="mt-12 transition-all duration-500"
          style={{
            transitionDelay: menuOpen ? "400ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center px-8 py-3 rounded-full font-nunito font-bold text-base text-white transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: "var(--coral)" }}
          >
            Book a Free Chat
          </Link>
        </div>
      </div>
    </>
  );
}
