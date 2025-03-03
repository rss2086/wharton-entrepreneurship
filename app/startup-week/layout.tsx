import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Week 2024 | Wharton Entrepreneurship Club",
  description: "Join us for a week of entrepreneurship events, workshops, and networking opportunities at Wharton.",
};

export default function StartupWeekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="startup-week-layout">
      <div className="bg-[#8C1515] text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-2">Wharton <span className="font-semibold">Startup Week</span></h1>
              <p className="text-white/90 text-lg">April 15-19, 2024 | University of Pennsylvania</p>
              <p className="mt-4 max-w-2xl text-white/80">
                A week of innovation, entrepreneurship, and networking with industry leaders and fellow entrepreneurs.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-wider text-white/70">Registration Open</div>
                  <div className="text-2xl font-semibold mt-1">April 15-19</div>
                  <div className="mt-3">
                    <a 
                      href="#register" 
                      className="inline-block bg-white text-[#8C1515] hover:bg-white/90 px-5 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 border-t border-white/20 pt-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              <a href="#schedule" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Schedule</a>
              <a href="#speakers" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Speakers</a>
              <a href="#sponsors" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Sponsors</a>
              <a href="#venue" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Venue</a>
              <a href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
} 