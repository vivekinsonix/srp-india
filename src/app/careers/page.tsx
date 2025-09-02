import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function Careers() {
  const items = [
    {
      title: "Culture",
      desc: "What we value and how we operate.",
      link: "/careers/culture",
    },
    {
      title: "Benefits",
      desc: "Pay, perks, and growth support.",
      link: "/careers/benefits",
    },
    {
      title: "Openings",
      desc: "Apply to active roles.",
      link: "/careers/openings",
    },
  ];

  return (
    <>
     <div className="min-h-screen bg-white text-slate-800">
        <Header />
    <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Careers</h1>
      <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
        Join a team that blends US-grade process rigor with Indian ingenuity. We’re hiring experienced
        BPO/logistics professionals who want to lead outcomes, not just tasks.
      </p>

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.link}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg"
          >
            <Link
              href={item.link}
              className="text-teal-700 font-semibold hover:underline dark:text-teal-400"
            >
              {item.title} →
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </li>
        ))}
      </ul>
    </main>
    </div>
      <Footer />
      </>
  );
}
