import Link from "next/link";

export default function StartupWeekPage() {
  return (
    <div className="flex-col items-center min-h-screen bg-[#1a1346] text-white pt-16 grid place-items-center">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Wharton Startup Week</h1>
          <p className="text-2xl md:text-3xl text-[#7ae582] font-light">
            The largest entrepreneurial event of the year
          </p>
        </div>

        <div className="text-center mb-16 space-y-6">
          <p className="text-xl">
            Want to meet cool founders? Network your way to a job at a startup? Or maybe
            just have a good time? Come join us for EClub&apos;s startup week!
          </p>

          <p className="text-xl">
            Our flagship event, Startup Summit, has us booking out Fitler Club for a full day
            packed with over 25+ founders, a networking fair, and two incredible keynotes
            by the founder of Octave, Sandeep Acharya, and the founder of Emergence
            Capital, Gordon Ritter.
          </p>
        </div>

        <div className="flex justify-center">
          <Link 
            href="https://startup-week.whartonentrepreneurship.com/"
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

function CountdownItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-6xl font-bold">{value}</div>
      <div className="text-sm md:text-base mt-2 text-gray-300">{label}</div>
    </div>
  );
}

function CountdownDivider() {
  return <div className="text-4xl md:text-6xl font-light self-start mt-1">:</div>;
} 