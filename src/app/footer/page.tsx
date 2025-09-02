

export default function Footer() {


  return (
    
<footer className="border-t  border-gray-300 ">
  <div className="mx-auto max-w-7xl container px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
    <div>
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md" style={{background:'#0f766e'}}></div>
        <strong>SRP US Logistics – India</strong>
      </div>
      <p className="mt-3 text-slate-600">India operations hub for a US trucking & brokerage group—building careers and community impact in Mohali.</p>
    </div>
    <div>
      <h4 className="font-semibold">Company</h4>
      <ul className="mt-2 space-y-1">
        <li><a href="/about/index.html" className="hover:text-teal-700">About</a></li>
        <li><a href="/careers/index.html" className="hover:text-teal-700">Careers</a></li>
        <li><a href="/news/index.html" className="hover:text-teal-700">Newsroom</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold">Resources</h4>
      <ul className="mt-2 space-y-1">
        <li><a href="/blogs/index.html" className="hover:text-teal-700">Blogs</a></li>
        <li><a href="/news/media-library.html" className="hover:text-teal-700">Media Library</a></li>
        <li><a href="/suppliers/index.html" className="hover:text-teal-700">Suppliers</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold">Contact</h4>
      <p className="mt-2">Plot No. 605, Industrial Area Phase 9,<br/>SAS Nagar (Mohali), Punjab 160062</p>
      <p className="mt-1">+91 9779178726</p>
      <p className="mt-1"><a className="hover:text-teal-700" href="mailto:info@srpuslogistics.com">info@srpuslogistics.com</a></p>
    </div>
  </div>
  <div className="border-t border-gray-300">
    <div className="mx-auto container px-4 py-6 text-xs text-slate-500">© 2025 SRP US Logistics Pvt Ltd. All rights reserved.</div>
  </div>
</footer>
  );
}
