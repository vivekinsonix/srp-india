"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // optional: nice icons

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700 flex items-center">
            <div className="h-8 w-8 rounded-md bg-teal-600" />
            <strong className="text-slate-900 ml-2">
              SRP US Logistics – India
            </strong>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <div className="relative group">
            <Link href="/about" className="hover:text-teal-700">
              About
            </Link>
            <div
              className="
                absolute left-0 mt-0  hidden
                group-hover:block hover:block
                w-56 rounded-md border-0 shadow-lg bg-white
              "
            >
              <div className="flex flex-col py-2">
                <Link
                  href="/about/founder"
                  className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-700"
                >
                  Founder
                </Link>
                <Link
                  href="/about/purpose"
                  className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-700"
                >
                  Purpose
                </Link>
                <Link
                  href="/about/improving-communities"
                  className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-700"
                >
                  Improving Communities
                </Link>
                <Link
                  href="/about/working-at-srp"
                  className="block px-4 py-2 text-sm hover:bg-teal-50 hover:text-teal-700"
                >
                  Working at SRP
                </Link>
              </div>
            </div>
          </div>

          <Link href="/careers" className="hover:text-teal-700">
            Careers
          </Link>
          <Link href="/news" className="hover:text-teal-700">
            News
          </Link>
          <Link href="/blogs" className="hover:text-teal-700">
            Blogs
          </Link>
          <Link href="/suppliers" className="hover:text-teal-700">
            Suppliers
          </Link>
          <Link href="/contact" className="hover:text-teal-700">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/careers"
          className="hidden md:inline-flex items-center rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700"
        >
          We’re Hiring
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobile}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-teal-50"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <details>
              <summary className="cursor-pointer py-1 font-semibold">
                About
              </summary>
              <div className="ml-4 mt-1 flex flex-col gap-1 text-slate-700">
                <Link href="/about/founder" onClick={() => setMobileOpen(false)}>
                  Founder
                </Link>
                <Link href="/about/purpose" onClick={() => setMobileOpen(false)}>
                  Purpose
                </Link>
                <Link
                  href="/about/improving-communities"
                  onClick={() => setMobileOpen(false)}
                >
                  Improving Communities
                </Link>
                <Link
                  href="/about/working-at-srp"
                  onClick={() => setMobileOpen(false)}
                >
                  Working at SRP
                </Link>
              </div>
            </details>

            <Link href="/careers" onClick={() => setMobileOpen(false)}>
              Careers
            </Link>
            <Link href="/news" onClick={() => setMobileOpen(false)}>
              News
            </Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)}>
              Blogs
            </Link>
            <Link href="/suppliers" onClick={() => setMobileOpen(false)}>
              Suppliers
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700"
            >
              We’re Hiring
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
