import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Calendar | Wharton Entrepreneurship Club',
  description: 'Upcoming events and activities from the Wharton Entrepreneurship Club',
};

export default function EventsPage() {
  // Sample events data - in a real app, this would come from a database or API
  const events = [
    {
      id: 1,
      title: 'Founder Speaker Series: Jane Smith',
      date: 'April 10, 2024',
      time: '5:00 PM - 6:30 PM',
      location: 'Huntsman Hall G06',
      description: 'Join us for a fireside chat with Jane Smith, founder of TechStart, as she shares her entrepreneurial journey.',
      category: 'Speaker Series',
    },
    {
      id: 2,
      title: 'Startup Week Kickoff',
      date: 'April 15, 2024',
      time: '12:00 PM - 2:00 PM',
      location: 'Huntsman Hall Forum',
      description: 'The official kickoff event for Wharton Startup Week 2024 featuring keynote speakers and networking.',
      category: 'Startup Week',
    },
    {
      id: 3,
      title: 'Venture Capital Panel',
      date: 'April 17, 2024',
      time: '4:00 PM - 5:30 PM',
      location: 'JMHH 255',
      description: 'Learn from top VCs about what they look for in startups and how to secure funding.',
      category: 'Startup Week',
    },
    {
      id: 4,
      title: 'Pitch Competition Finals',
      date: 'April 19, 2024',
      time: '3:00 PM - 6:00 PM',
      location: 'Huntsman Hall Auditorium',
      description: 'Watch the finalists pitch their startups to a panel of judges for a chance to win funding and resources.',
      category: 'Competition',
    },
    {
      id: 5,
      title: 'Entrepreneurship Workshop: MVP Development',
      date: 'April 25, 2024',
      time: '5:30 PM - 7:00 PM',
      location: 'JMHH 370',
      description: 'A hands-on workshop on building and validating your minimum viable product.',
      category: 'Workshop',
    },
    {
      id: 6,
      title: 'Networking Mixer with Penn Founders',
      date: 'May 2, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Venture Lab',
      description: 'Connect with Penn alumni who have founded successful startups across various industries.',
      category: 'Networking',
    },
  ];

  // Group events by month
  const eventsByMonth: Record<string, typeof events> = {};
  events.forEach(event => {
    const date = new Date(event.date);
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!eventsByMonth[monthYear]) {
      eventsByMonth[monthYear] = [];
    }
    eventsByMonth[monthYear].push(event);
  });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Event Calendar</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Stay up to date with all of our upcoming events, workshops, and networking opportunities.
          </p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="flex space-x-2">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors">
              Month
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors">
              List
            </button>
          </div>
        </div>

        {/* Events by Month */}
        <div className="space-y-12">
          {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
            <div key={month}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-800">{month}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-800 transition-colors"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-900 text-white rounded mb-2">
                            {event.category}
                          </span>
                          <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center text-gray-400 mb-1">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-400 mb-1">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>
                      <button className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add to Calendar Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Event</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our calendar to stay updated with all our events and activities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-15 1.5h15v15h-15v-15z"/>
                <path d="M7.5 10.5h9v1.5h-9z"/>
                <path d="M7.5 13.5h9v1.5h-9z"/>
                <path d="M7.5 7.5h9v1.5h-9z"/>
              </svg>
              Google Calendar
            </button>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
              iCal
            </button>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Outlook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 