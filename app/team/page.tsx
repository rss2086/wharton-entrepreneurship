import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team | Wharton Entrepreneurship Club',
  description: 'Meet the leadership team behind the Wharton Entrepreneurship Club',
};

export default function TeamPage() {
  // Sample team data - in a real app, this would come from a database or API
  const executiveTeam = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'President',
      image: '/team/placeholder-1.jpg',
      bio: 'MBA candidate with a background in tech startups. Previously founded a SaaS company and worked at a venture capital firm.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 2,
      name: 'Maya Patel',
      role: 'Vice President',
      image: '/team/placeholder-2.jpg',
      bio: 'Second-year MBA focusing on entrepreneurship and innovation. Former product manager at a Fortune 500 company.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Director of Operations',
      image: '/team/placeholder-3.jpg',
      bio: 'MBA candidate with experience in operations and strategy consulting. Passionate about building scalable business models.',
      linkedin: 'https://linkedin.com/',
    },
  ];

  const directors = [
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Director of Events',
      image: '/team/placeholder-4.jpg',
      bio: 'Undergraduate senior majoring in Business with a concentration in Marketing. Organized multiple campus-wide events.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 5,
      name: 'James Rodriguez',
      role: 'Director of Partnerships',
      image: '/team/placeholder-5.jpg',
      bio: 'MBA candidate with a background in business development. Passionate about connecting startups with resources.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 6,
      name: 'Olivia Kim',
      role: 'Director of Marketing',
      image: '/team/placeholder-6.jpg',
      bio: 'Undergraduate junior studying Marketing and Entrepreneurship. Previously interned at a tech startup.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 7,
      name: 'Michael Thompson',
      role: 'Director of Startup Week',
      image: '/team/placeholder-7.jpg',
      bio: 'Second-year MBA with experience in event management and community building. Former startup founder.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 8,
      name: 'Emma Davis',
      role: 'Director of Ventures',
      image: '/team/placeholder-8.jpg',
      bio: 'MBA candidate focusing on venture capital and startup investing. Previously worked at an accelerator program.',
      linkedin: 'https://linkedin.com/',
    },
    {
      id: 9,
      name: 'Ryan Park',
      role: 'Director of Technology',
      image: '/team/placeholder-9.jpg',
      bio: 'Computer Science and Business dual degree student. Passionate about building products that solve real problems.',
      linkedin: 'https://linkedin.com/',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Team</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Meet the passionate individuals leading the Wharton Entrepreneurship Club and driving our mission forward.
          </p>
        </div>
      </div>

      {/* Executive Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">Executive Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executiveTeam.map((member) => (
            <div 
              key={member.id} 
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-800 transition-all group"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directors Section */}
      <div className="container mx-auto px-4 py-16 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-12 text-center">Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((member) => (
            <div 
              key={member.id} 
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-800 transition-all group"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-gray-800">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join the Team Section */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in entrepreneurship and want to make an impact at Wharton? We&apos;re always looking for passionate individuals to join our team.
          </p>
          <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
} 