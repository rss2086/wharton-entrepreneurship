import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sponsorships | Wharton Entrepreneurship Club',
  description: 'Partner with the Wharton Entrepreneurship Club and connect with future business leaders and entrepreneurs',
};

export default function SponsorshipsPage() {
  // Sample current sponsors - in a real app, this would come from a database or API
  const currentSponsors = [
    {
      id: 1,
      name: 'TechVentures',
      tier: 'Platinum',
      logo: '/sponsors/placeholder-1.png',
      website: 'https://example.com',
    },
    {
      id: 2,
      name: 'InnovateCapital',
      tier: 'Gold',
      logo: '/sponsors/placeholder-2.png',
      website: 'https://example.com',
    },
    {
      id: 3,
      name: 'StartupLabs',
      tier: 'Gold',
      logo: '/sponsors/placeholder-3.png',
      website: 'https://example.com',
    },
    {
      id: 4,
      name: 'FutureFounders',
      tier: 'Silver',
      logo: '/sponsors/placeholder-4.png',
      website: 'https://example.com',
    },
    {
      id: 5,
      name: 'GrowthPartners',
      tier: 'Silver',
      logo: '/sponsors/placeholder-5.png',
      website: 'https://example.com',
    },
  ];

  // Sponsorship tiers
  const sponsorshipTiers = [
    {
      name: 'Platinum',
      price: '$10,000',
      benefits: [
        'Prominent logo placement on all club materials',
        'Featured in all event promotions',
        'Dedicated session at Startup Week',
        'Access to resume book of all club members',
        'Opportunity to host exclusive workshops',
        'First access to club-organized recruiting events',
        'Featured in monthly newsletter',
        'Social media promotion',
      ],
      featured: true,
    },
    {
      name: 'Gold',
      price: '$5,000',
      benefits: [
        'Logo placement on club website and materials',
        'Participation in Startup Week',
        'Access to resume book of all club members',
        'Opportunity to host workshops',
        'Participation in club-organized recruiting events',
        'Featured in monthly newsletter',
        'Social media promotion',
      ],
      featured: false,
    },
    {
      name: 'Silver',
      price: '$2,500',
      benefits: [
        'Logo placement on club website',
        'Participation in select events',
        'Access to resume book of interested members',
        'Participation in club-organized recruiting events',
        'Mention in monthly newsletter',
        'Social media promotion',
      ],
      featured: false,
    },
    {
      name: 'Bronze',
      price: '$1,000',
      benefits: [
        'Logo placement on club website',
        'Participation in select events',
        'Mention in monthly newsletter',
        'Social media promotion',
      ],
      featured: false,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-black to-black py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Partner With Us</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Connect with the next generation of entrepreneurs and business leaders through sponsorship opportunities with the Wharton Entrepreneurship Club.
          </p>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Sponsor Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 hover:border-indigo-800 transition-all">
            <div className="bg-indigo-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Access Top Talent</h3>
            <p className="text-gray-400">
              Connect with highly motivated students from one of the world&apos;s top business schools. Our members are future leaders, entrepreneurs, and innovators.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 hover:border-indigo-800 transition-all">
            <div className="bg-indigo-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Brand Visibility</h3>
            <p className="text-gray-400">
              Gain exposure to the Penn and Wharton community through our events, website, social media, and promotional materials throughout the academic year.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 hover:border-indigo-800 transition-all">
            <div className="bg-indigo-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Industry Leadership</h3>
            <p className="text-gray-400">
              Position your organization as a leader in supporting entrepreneurship and innovation. Help shape the future of business through mentorship and collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <div className="bg-gray-900/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sponsorship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`bg-gradient-to-br ${
                  tier.featured 
                    ? 'from-indigo-900 to-purple-900 border-indigo-700' 
                    : 'from-gray-900 to-black border-gray-800'
                } border rounded-lg overflow-hidden transition-all hover:transform hover:scale-105 relative`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold mb-6">{tier.price}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-md font-medium transition-colors ${
                    tier.featured 
                      ? 'bg-white text-indigo-900 hover:bg-gray-100' 
                      : 'bg-indigo-900 text-white hover:bg-indigo-800'
                  }`}>
                    Select {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Sponsors */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Current Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {currentSponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:border-indigo-800 transition-all group"
            >
              <div className="relative w-full h-24 mb-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <h3 className="text-center font-medium">{sponsor.name}</h3>
              <span className="text-xs text-indigo-400">{sponsor.tier} Sponsor</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Becoming a Sponsor?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We&apos;d love to discuss how we can create a partnership that meets your organization&apos;s goals. Contact our sponsorship team to learn more.
          </p>
          <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 