"use client";

import Link from "next/link";
import { Menu, QrCode, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "URL", href: "/url" },
  { name: "Text", href: "/text" },
  { name: "WiFi", href: "/wifi" },
  { name: "Email", href: "/email" },
  { name: "Phone", href: "/phone" },
  { name: "SMS", href: "/sms" },
  { name: "vCard", href: "/vcard" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <QrCode size={20} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            QRify
          </span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] border-t border-gray-200"
            : "max-h-0"
        }`}
      >
        <nav className="container-custom flex flex-col py-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}