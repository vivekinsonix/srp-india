// app/blogs/post-founder-spotlight/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
export default function FounderSpotlightPage() {
  return (
       <>
        <div className="min-h-screen bg-white text-slate-800">
           <Header />
       <main className="container mx-auto max-w-7xl  px-4 py-10">
      <h1 className="text-3xl font-semibold">
        Founder Spotlight: Rajwinder Singh Boparai
      </h1>
      <p className="mt-1 text-sm text-slate-500">Aug 28, 2025 • SRP Editorial</p>

      <article className="prose mt-6 max-w-none">
        <p>
          Mr. Boparai has been instrumental in building a robust trucking and
          brokerage business in the US, while nurturing employment and training
          opportunities in Mohali.
        </p>
        <p>
          From early partnerships to sustained carrier relationships, his focus
          has remained on reliability, transparency, and community building.
        </p>
      </article>
   </main>
     </div>
       <Footer />
       </>
  );
}
