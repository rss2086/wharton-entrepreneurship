'use client';

export default function Sponsored() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
            For Companies
          </span>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">Sponsor EClub for 2024-2025</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">We&apos;re seeking visionary corporations to partner with for the upcoming academic year. Your sponsorship will empower the next generation of entrepreneurs at Wharton, providing invaluable resources and opportunities to our members. Previous sponsors have hosted events with Wharton students, brought in speakers, and provided networking opportunities.</p>
            <div className="mt-8 flex items-center gap-x-6">
              <a href="mailto:rohanss@wharton.upenn.edu" className="text-sm font-semibold text-white underline">Contact us for Sponsorship Opportunities<span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:pl-8">
            <div className="bg-white/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Sponsor Us?</h3>
              <ul className="text-gray-300 text-left space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Access to top talent from Wharton
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Brand visibility among future business leaders
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Opportunities to mentor and engage with students
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Support innovation and entrepreneurship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 