import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Wharton Entrepreneurship Club',
  description: 'Entrepreneurial resources, guides, and tools for Wharton students',
};

export default function ResourcesPage() {
  // Sample resources data - in a real app, this would come from a database or API
  const resourceCategories = [
    {
      id: 'startup-guides',
      title: 'Startup Guides',
      description: 'Comprehensive guides to help you navigate the startup journey',
      resources: [
        {
          id: 1,
          title: 'Idea Validation Framework',
          description: 'A step-by-step guide to validating your startup idea before building',
          type: 'PDF',
          link: '#',
        },
        {
          id: 2,
          title: 'Business Model Canvas Template',
          description: 'Template and instructions for mapping out your business model',
          type: 'Template',
          link: '#',
        },
        {
          id: 3,
          title: 'Minimum Viable Product (MVP) Guide',
          description: 'How to build and test your MVP efficiently',
          type: 'Guide',
          link: '#',
        },
        {
          id: 4,
          title: 'Pitch Deck Template',
          description: 'Investor-ready pitch deck template with examples',
          type: 'Template',
          link: '#',
        },
      ],
    },
    {
      id: 'funding',
      title: 'Funding Resources',
      description: 'Resources to help you secure funding for your venture',
      resources: [
        {
          id: 5,
          title: 'Penn/Wharton Startup Funding Guide',
          description: 'Overview of funding opportunities available to Penn students',
          type: 'Guide',
          link: '#',
        },
        {
          id: 6,
          title: 'VC Term Sheet Glossary',
          description: 'Explanation of common terms in venture capital term sheets',
          type: 'PDF',
          link: '#',
        },
        {
          id: 7,
          title: 'Equity Dilution Calculator',
          description: 'Tool to calculate equity dilution across funding rounds',
          type: 'Tool',
          link: '#',
        },
        {
          id: 8,
          title: 'Grant Application Templates',
          description: 'Templates for common startup grant applications',
          type: 'Template',
          link: '#',
        },
      ],
    },
    {
      id: 'legal',
      title: 'Legal Resources',
      description: 'Legal templates and guides for startups',
      resources: [
        {
          id: 9,
          title: 'Founder Agreement Template',
          description: 'Template agreement for co-founders',
          type: 'Template',
          link: '#',
        },
        {
          id: 10,
          title: 'IP Protection Guide',
          description: 'Guide to protecting your intellectual property',
          type: 'Guide',
          link: '#',
        },
        {
          id: 11,
          title: 'Privacy Policy Generator',
          description: 'Tool to generate a privacy policy for your startup',
          type: 'Tool',
          link: '#',
        },
        {
          id: 12,
          title: 'Employee Equity Guide',
          description: 'Guide to setting up an employee equity plan',
          type: 'Guide',
          link: '#',
        },
      ],
    },
    {
      id: 'penn-resources',
      title: 'Penn & Wharton Resources',
      description: 'Entrepreneurship resources available at Penn and Wharton',
      resources: [
        {
          id: 13,
          title: 'Venture Lab Programs',
          description: 'Overview of programs offered by Penn Venture Lab',
          type: 'Guide',
          link: '#',
        },
        {
          id: 14,
          title: 'Wharton Small Business Development Center',
          description: 'Services offered by the SBDC',
          type: 'Link',
          link: '#',
        },
        {
          id: 15,
          title: 'Penn Center for Innovation',
          description: 'Resources for commercializing research and technology',
          type: 'Link',
          link: '#',
        },
        {
          id: 16,
          title: 'Wharton Entrepreneurship Advisors',
          description: 'How to connect with Wharton entrepreneurship advisors',
          type: 'Guide',
          link: '#',
        },
      ],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Entrepreneurship Resources</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Access guides, templates, and tools to help you on your entrepreneurial journey.
          </p>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <span className="text-indigo-400 text-sm font-medium flex items-center">
                View Resources
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Resource Listings */}
        {resourceCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-800">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-900/50 text-indigo-300 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center"
                  >
                    Access Resource
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Office Hours Section */}
      <div className="bg-gray-900/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Entrepreneurship Office Hours</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Get personalized advice from experienced entrepreneurs, investors, and industry experts. Our office hours are available to all Wharton students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Startup Advisors</h3>
              <p className="text-gray-400 mb-4">
                Meet with experienced entrepreneurs who can provide guidance on your startup idea or venture.
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">When:</span> Tuesdays, 2-4 PM
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Where:</span> Venture Lab, 3rd Floor
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">VC Office Hours</h3>
              <p className="text-gray-400 mb-4">
                Get feedback on your pitch and fundraising strategy from venture capital investors.
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">When:</span> Thursdays, 3-5 PM
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Where:</span> Huntsman Hall 351
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Legal Clinic</h3>
              <p className="text-gray-400 mb-4">
                Consult with legal experts on startup-related legal questions and documentation.
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">When:</span> Fridays, 1-3 PM
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Where:</span> Virtual (Zoom)
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Book Office Hours
            </button>
          </div>
        </div>
      </div>

      {/* Submit Resource Section */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Have a Resource to Share?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have a helpful resource that could benefit other entrepreneurs in our community, we&apos;d love to add it to our collection.
          </p>
          <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Submit a Resource
          </button>
        </div>
      </div>
    </div>
  );
} 