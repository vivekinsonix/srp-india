// app/suppliers/page.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import HeroSection from "../subheader/page";

export default function Suppliers() {
  const [form, setForm] = useState({
    company: "",
    email: "",
    website: "",
    offer: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Supplier form submitted:", form);
    alert("Thank you! We have received your submission.");
    setForm({ company: "", email: "", website: "", offer: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
               <HeroSection
                backgroundImage="/hero-bg.jpg"
                eyebrow="Suppliers"
                title="Suppliers"
                highlight=" - services or products"
                description="If you provide services or products relevant to call center operations, IT, or
            facilities, introduce your company here. We proactively shortlist vendors for
            quarterly sourcing."
                primaryAction={{ label: "Learn More", href: "/about" }}
                secondaryAction={{ label: "Contact Us", href: "/contact" }}
              />
        <main className="container mx-auto max-w-7xl px-4 py-10">
  
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2"
          >
            <input
              required
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Work email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <input
              name="website"
              placeholder="Website"
              value={form.website}
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <textarea
              name="offer"
              placeholder="What do you offer? (200–300 words)"
              value={form.offer}
              onChange={handleChange}
              rows={4}
              className="md:col-span-2 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700"
            >
              Submit
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}
