
import Header from "../../header/page";
import Footer from "../../footer/page";
import HeroSection from "@/app/subheader/page";

export default function Founder() {
  

  return (
    <>
    <div className="min-h-screen bg-white text-slate-800">
    <Header />
            <HeroSection
                            backgroundImage="/hero-bg.jpg"
                            eyebrow="Founder"
                            title="Founder  "
                            highlight="Mr. Rajwinder Singh Boparai"
                            description="From a handful of trucks to a robust US trucking & brokerage group—Mr. Boparai blends entrepreneurship with social commitment in Punjab.."
                            primaryAction={{ label: "Learn More", href: "/about" }}
                            secondaryAction={{ label: "Contact Us", href: "/contact" }}
                          />
    <main className=" mx-auto max-w-7xl px-4 py-10">


      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 prose max-w-none">
          <h2>Media Kit</h2>
          <ul>
            <li>Downloadable bio &amp; fact sheet (PDF)</li>
            <li>Logo pack (PNG &amp; SVG), headshots</li>
            <li>Speaking, podcast &amp; campus visit requests</li>
          </ul>

          <h2>Recognition</h2>
          <p>
            Local press coverage for youth engagement, dignitary visits, and job
            creation efforts in Mohali.
          </p>
        </div>

        <aside className="card rounded-xl border p-4 shadow-sm">
          <h3 className="font-semibold">In the News</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>Youth talk on BPO careers – coverage and photos</li>
            <li>Academic delegation: skills &amp; career pathways</li>
            <li>CSR initiatives across Mohali region</li>
          </ul>
        </aside>
      </div>
    </main>
   
    </div>
     <Footer />
    </>
  );
}
