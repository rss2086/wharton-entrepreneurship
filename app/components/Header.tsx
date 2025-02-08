import Image from 'next/image';


export default function Header() {
  // This would normally come from Storyblok, but for now we'll use static data
  const content = {
    clubName: "Wharton Entrepreneurship Club",
    tagline: "Building the next generation of founders",
    description1: "We are a community of entrepreneurs, innovators, and leaders who are passionate about building the future.",
    description2: "Through our events, programs, and network, we help students explore entrepreneurship, develop their ideas, and connect with like-minded individuals.",
    founded: "1989",
    members: "500+",
    events: "50+",
    founders: "100+"
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-24 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="columns-2 lg:columns-2 gap-4">
            <Image alt="Picture of Eclub Members at a Social" className="w-full aspect-video mb-6" src="/eclub-homepage/eclub-landscape-1.jpg" width={500} height={300} />
            <Image alt="Picture of Eclub Members at a Social" className="w-full aspect-square mb-6" src="/eclub-homepage/eclub-landscape-2.png" width={500} height={500} />
            <Image alt="Picture of Eclub Members at a Social" className="w-full aspect-square mb-6" src="/eclub-homepage/eclub-portrait-1.jpg" width={500} height={500} />
            <Image alt="Picture of Eclub Members at a Social" className="w-full aspect-video mb-6" src="/eclub-homepage/eclub-portrait-2.jpg" width={500} height={300} />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#026cbf]">{content.clubName}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{content.tagline}</h1>
              <div className="max-w-xl">
                <p className="mt-6">{content.description1}</p>
                <p className="mt-8">{content.description2}</p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Founded</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{content.founded}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Members</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{content.members}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Events</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{content.events}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold leading-6 text-gray-600">Founders</dt>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{content.founders}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 