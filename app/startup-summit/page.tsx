import Link from "next/link";

export default function StartupSummitPage() {
  return (
    <div className="flex-col items-center min-h-screen bg-[#1a1346] text-white pt-16 grid place-items-center">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Wharton Startup Summit</h1>
          <p className="text-2xl md:text-3xl text-[#7ae582] font-light">
            The biggest entrepreneurial event of the year
          </p>
        </div>

        <div className="text-center mb-16 space-y-6">
          <p className="text-xl">
            Want to meet cool founders? Network your way to a job at a startup? Or maybe
            just have a good time? Come join us for EClub&apos;s Startup Summit!
          </p>

          <p className="text-xl">
            We&apos;re taking over Sheraton University City for a full day packed with over
            25+ founders, a networking fair, and two incredible keynotes by the
            CEO/Co-founder of Stan, John Hu, and the CEO/Co-founder of Beli, Judy Thelen.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="https://startup-summit.whartonentrepreneurship.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7ae582] hover:bg-[#5dbb66] text-[#1a1346] font-bold text-xl py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            Visit Official Website
          </Link>
        </div>
      </div>
    </div>
  );
}
