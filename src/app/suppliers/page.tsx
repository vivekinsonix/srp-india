
"use client";

import { useState } from "react";
import Header from "../header/page";
import Footer from "../footer/page";


export default function Suppliers() {
  const [form, setForm] = useState({
    company: "",
    email: "",
    website: "",
    offer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your API call:
    console.log("Supplier form submitted:", form);
    alert("Thank you! We have received your submission.");
    setForm({ company: "", email: "", website: "", offer: "" });
  };

  return (
    <>
     <div className="min-h-screen bg-white text-slate-800">
        <Header />
<main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Suppliers</h1>
      <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
        If you provide services or products relevant to call center operations, IT, or facilities,
        introduce your company here. We proactively shortlist vendors for quarterly sourcing.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 dark:border-gray-700 dark:bg-gray-800"
      >
        <input
          required
          name="company"
          placeholder="Company name"
          value={form.company}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Work email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <input
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-3 py-2 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="offer"
          placeholder="What do you offer? (200–300 words)"
          value={form.offer}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-3 py-2 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          rows={4}
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
