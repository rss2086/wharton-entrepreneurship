'use client';

import Image from 'next/image';

const people = [
  {
    name: 'Rohan Shah',
    role: 'Co-President',
    imageUrl: '/leadership/rohan-picture.jpeg',
    linkedinUrl: 'https://linkedin.com/in/rss2086',
    email:'rohanss@wharton.upenn.edu'
  },
  {
    name: 'Srineetha Maddineni',
    role: 'Co-President',
    imageUrl: '/leadership/srineetha-picture.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/srineethamaddineni/',
    email:'srimad@wharton.upenn.edu'
  },
  {
    name: 'Naman Jain',
    role: 'Co-President',
    imageUrl: '/leadership/naman-picture.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/naman-jain-5a6126165/',
    email: 'naman9@wharton.upenn.edu',
  },
];

export default function ClubLeadership() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-blue-950 py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl text-white font-bold sm:text-5xl">Meet our 24-25 Leadership</h2>
          <p className="text-white py-4 text-lg">Feel free to reach out to us on Linkedin or via email for any questions or opportunities.</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105">
                <Image 
                  alt={`${person.name}'s picture`} 
                  src={person.imageUrl} 
                  width={400}
                  height={288}
                  className="w-full h-72 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-sm font-medium text-gray-200">{person.role}</p>
                  <ul role="list" className="mt-4 flex justify-center gap-x-4">
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-300 hover:text-blue-300 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${person.email}`} className="text-gray-300 hover:text-blue-300 transition-colors">
                        <span className="sr-only">Email</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 