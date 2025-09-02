import Header from "../../header/page";
import Footer from "../../footer/page";

export default function PurposePage() {
  return (
    <>
       <div className="min-h-screen bg-white text-slate-800">
       <Header />
       <main className=" mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Our Purpose</h1>

      <p className="lead mt-4 max-w-3xl">
        Build dependable logistics solutions for the US market while creating
        high-quality, stable employment in Mohali. We believe global supply
        chains get stronger when operations and opportunity are distributed.
      </p>

      <div className="prose mt-6 max-w-none">
        <h2>What this means</h2>
        <ul>
          <li>
            Operational excellence for US lanes: on-time status, clean
            documentation, accurate billing.
          </li>
          <li>
            Career tracks for Indian talent: dispatch, account ops, QA, HR, IT,
            and analytics.
          </li>
          <li>
            Transparent communication with shippers, carriers, and communities.
          </li>
        </ul>

        <h2>Commitments</h2>
        <p className="mt-5">
          We commit to training, fair pay, responsible shifts, and measurable
          outcomes. Our teams operate on Zoho One, RingCentral, Turvo, and DAT
          to meet US client expectations.
        </p>
      </div>
        </main>
       
        </div>
         <Footer />
        </>
  );
}
