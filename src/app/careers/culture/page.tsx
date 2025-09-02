// app/our-culture/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
export default function OurCulture() {
  return (
      <>
       <div className="min-h-screen bg-white text-slate-800">
          <Header />
  <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Our Culture</h1>
      <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
        We prioritize clarity, fairness, and ownership. Teams are small, expectations
        are explicit, and leaders coach continuously.
      </p>
      <div className="prose mt-6 max-w-none text-gray-700 dark:prose-invert">
        <h2>Principles</h2>
        <ul>
          <li>
            <strong>Customer trust:</strong> promises kept, statuses accurate.
          </li>
          <li>
            <strong>Coaching culture:</strong> feedback loops every week.
          </li>
          <li>
            <strong>Bias to action:</strong> escalate early, resolve fast.
          </li>
        </ul>
        </div>
          <div className="prose mt-6 max-w-none text-gray-700 dark:prose-invert">
        <h2>Routines</h2>
        <p>
          Daily standups, weekly QA reviews, monthly skills clinics. Recognition is
          public and specific.
        </p>
      </div>
   </main>
   </div>
         
            <Footer />
            </>
  );
}
