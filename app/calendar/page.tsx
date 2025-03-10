import { ArrowRight, Calendar, Clock, MapPin, Tag, Info, Calendar as CalendarIcon, ExternalLink, User } from "lucide-react";
import Image from "next/image";

export default function CalendarPage() {
  // Group events by month
  const eventsByMonth = groupEventsByMonth(events);

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="mb-16">
        <h1 className="text-5xl font-bold py-12 text-center bg-gradient-to-r from-blue-500 to-violet-600 text-transparent bg-clip-text">Upcoming Events</h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Join us for these exciting entrepreneurship events throughout the year
        </p>
      </div>

      <div className="space-y-28">
        {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
          <MonthSection key={month} month={month} events={monthEvents} />
        ))}
      </div>
    </div>
  );
}

function MonthSection({ month, events }: { month: string; events: Event[] }) {
  return (
    <section>
      <div className="top-24 pt-4 pb-3">
        <div className="flex items-center justify-start mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mr-4 shadow-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            {month}
          </h2>
        </div>
      </div>

      <div className="ml-6 relative">
        {/* Timeline vertical line */}
        <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-violet-600"></div>

        <div className="space-y-16">
          {events.map((event, index) => (
            <EventTimelineItem 
              key={index} 
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventTimelineItem({ 
  event
}: { 
  event: Event; 
}) {
  const { title, date, endDate, startTime, endTime, location, description, tags, specialNote, timeSlots, speakers, detailsUrl } = event;
  
  // Format date for display
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const dayOfWeek = eventDate.toLocaleDateString('en-US', { weekday: 'short' });
  
  // Check if event has passed
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPastEvent = eventDate < today;
  
  // Check if it's a multi-day event
  const isMultiDayEvent = endDate ? true : false;
  let durationText = "";
  
  if (isMultiDayEvent && endDate) {
    const endEventDate = new Date(endDate);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const startFormatted = eventDate.toLocaleDateString('en-US', options);
    const endFormatted = endEventDate.toLocaleDateString('en-US', options);
    durationText = `${startFormatted} - ${endFormatted}`;
  }
  
  return (
    <div className="relative pl-8 group">
      {/* Timeline node */}
      <div className={`absolute left-0 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white ${
        isPastEvent 
          ? 'bg-blue-500' 
          : isMultiDayEvent 
            ? 'bg-gradient-to-br from-violet-500 to-purple-600' 
            : 'bg-gradient-to-br from-blue-500 to-indigo-600'
      } shadow-lg z-10 group-hover:scale-110 transition-all duration-300`}>
        {isPastEvent && <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
        {isMultiDayEvent && !isPastEvent && <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>}
      </div>
      
      {/* Event content */}
      <div className={`rounded-xl bg-white overflow-hidden transition-all duration-300 group-hover:translate-y-[-2px] ${
        isPastEvent ? 'opacity-100 shadow-md' : 'shadow-lg shadow-gray-200/70 hover:shadow-xl hover:shadow-blue-100/50'
      } border border-gray-100 group-hover:border-blue-200`}>
        <div className="lg:flex">
          {/* Date column */}
          <div className={`${
            isPastEvent
              ? 'bg-gradient-to-br from-blue-800 to-blue-900'
              : isMultiDayEvent
                ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                : 'bg-gradient-to-br from-blue-800 to-indigo-900'
          } text-white py-6 px-4 lg:w-48 flex flex-row lg:flex-col lg:items-center justify-center text-center relative overflow-hidden`}>
            {/* Decorative circles */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-white/5"></div>
            <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-white/5"></div>
            
            {isMultiDayEvent ? (
              <div className="flex flex-col items-center justify-center w-full z-10">
                <CalendarIcon className="w-6 h-6 mb-2 opacity-90" />
                <span className="text-lg font-bold">{durationText}</span>
                <span className="text-sm mt-1 px-2 py-0.5 rounded-full bg-white/20 text-white">Multi-day Event</span>
              </div>
            ) : (
              <div className="z-10 flex flex-col items-center justify-center w-full">
                <div className="mr-4 lg:mr-0 mb-1">
                  <span className="block text-5xl font-bold">{day}</span>
                  <span className="text-blue-100">{dayOfWeek}</span>
                </div>
                <div className="flex lg:flex-col items-center justify-center mt-2">
                  <Clock className="w-4 h-4 mr-1 lg:mr-0 lg:mb-1 opacity-70" />
                  <span className="text-sm">{startTime} - {endTime}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Main content */}
          <div className="p-6 flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                >
                  <Tag className="w-3 h-3 mr-1.5" />
                  {tag}
                </span>
              ))}
              {isMultiDayEvent && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-50 text-violet-600 border border-violet-100">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  Multi-day
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
            
            <div className="flex items-start mb-5 text-gray-600">
              <MapPin className="w-5 h-5 flex-shrink-0 mr-2 text-blue-400" />
              <span>{location}</span>
            </div>
            
            <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>

            {/* Display event speakers if available */}
            {speakers && speakers.length > 0 && (
              <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg border border-blue-100/50">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <User className="w-4 h-4 mr-1.5 text-blue-500" /> Featured Speakers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {speakers.slice(0, 3).map((speaker, idx) => (
                    <div key={idx} className="flex items-center bg-white rounded-full pl-1 pr-3 py-1 shadow-sm border border-gray-100">
                      {speaker.image ? (
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 rounded-full mr-2 object-cover border border-blue-100"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-2 flex items-center justify-center text-xs text-white font-medium">
                          {speaker.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-700">{speaker.name}</span>
                      {speaker.role && (
                        <span className="text-xs text-gray-500 ml-1">• {speaker.role}</span>
                      )}
                    </div>
                  ))}
                  {speakers.length > 3 && (
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      +{speakers.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Display abbreviated time slots if available */}
            {timeSlots && timeSlots.length > 0 && (
              <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg border border-blue-100/50">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-blue-500" /> Schedule Highlights
                </h4>
                <div className="space-y-3">
                  {timeSlots.slice(0, 2).map((slot, idx) => (
                    <div key={idx} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{slot.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{slot.start} - {slot.end}</div>
                        {slot.description && (
                          <div className="text-xs text-gray-600 mt-1">{slot.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  {timeSlots.length > 2 && (
                    <div className="text-sm text-blue-600 font-medium flex items-center pl-3">
                      +{timeSlots.length - 2} more sessions
                    </div>
                  )}
                </div>
              </div>
            )}

            {specialNote && (
              <div className="flex items-start p-4 mb-6 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
                <Info className="w-5 h-5 flex-shrink-0 mr-3 text-amber-500" />
                <p className="text-sm">{specialNote}</p>
              </div>
            )}
            
            <div className="mt-5 flex flex-wrap gap-3">
              {event.registrationLink && !isPastEvent && (
                <a 
                  href={event.registrationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors group"
                >
                  Register for this event
                  <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}

              {detailsUrl && (
                <a 
                  href={detailsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-blue-200 hover:border-blue-300 bg-white text-blue-600 hover:text-blue-700 font-medium rounded-full transition-colors group"
                >
                  View full schedule
                  <ExternalLink className="ml-1.5 w-4 h-4 transition-all group-hover:scale-110" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to group events by month
function groupEventsByMonth(events: Event[]) {
  const grouped: Record<string, Event[]> = {};

  events.forEach(event => {
    const date = new Date(event.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    
    grouped[monthYear].push(event);
  });

  // Sort months chronologically
  const sortedGrouped: Record<string, Event[]> = {};
  
  Object.keys(grouped)
    .sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA.getTime() - dateB.getTime();
    })
    .forEach(month => {
      sortedGrouped[month] = grouped[month];
    });

  return sortedGrouped;
}

// Updated Event type for more complex events
type Speaker = {
  name: string;
  role?: string;
  company?: string;
  image?: string;
  companyLogoUrl?: string;
  companyWebsite?: string;
};

type TimeSlot = {
  name: string;
  description: string | null;
  start: string;
  end: string;
  isVirtual: boolean;
  speakers?: Speaker[];
  eventUrl?: string;
  format?: {
    time: string;
    title: string;
    description: string;
    applicationInfo?: {
      deadline: string;
      notificationDate: string;
      slots: number;
    };
  }[];
};

type Event = {
  title: string;
  date: string;
  endDate?: string; // For multi-day events
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  tags: string[];
  registrationLink?: string;
  specialNote?: string;
  detailsUrl?: string;
  speakers?: Speaker[];
  timeSlots?: TimeSlot[];
};

// Real event data with enhanced structure and updated locations
const events: Event[] = [
  {
    title: "Startup Week 2025",
    date: "2025-03-17", // Start date (Monday)
    endDate: "2025-03-21", // End date (Friday)
    startTime: "All Day",
    endTime: "Multiple Days",
    location: "Various Locations on Campus + Fitler Club",
    description: "Join us for our flagship event bringing together entrepreneurs, investors, and industry leaders for a week of innovation and networking, culminating in the Startup Summit.",
    tags: ["Conference", "Networking", "Multiple Days"],
    registrationLink: "https://startup-week.whartonentrepreneurship.com/",
    specialNote: "Students: Please purchase tickets via Campus Groups, not the regular link. Non-students should use the public registration link.",
    detailsUrl: "https://startup-week-kappa.vercel.app/schedule",
  },
  {
    title: "Launchpad Chat with Amberly Jones",
    date: "2025-03-24",
    startTime: "5:00 PM",
    endTime: "6:30 PM",
    location: "TBD",
    description: "Join us for an insightful conversation with Amberly Jones, Head of Growth at Frec, discussing her career journey and offering advice for aspiring entrepreneurs.",
    tags: ["Launchpad Chat", "Growth", "Career Insights"],
    speakers: [
      {
        name: "Amberly Jones",
        role: "Head of Growth",
        company: "Frec"
      }
    ]
  },
  {
    title: "Launchpad Chat with Simi Shah and Alexis Barber",
    date: "2025-03-25",
    startTime: "5:00 PM",
    endTime: "6:30 PM",
    location: "TBD",
    description: "An exclusive fireside chat with Wharton founders Simi Shah and Alexis Barber, sharing their entrepreneurial journeys and lessons learned along the way.",
    tags: ["Launchpad Chat", "Founder Stories", "Wharton Alumni"],
    speakers: [
      {
        name: "Simi Shah",
        role: "Founder",
        company: "Wharton"
      },
      {
        name: "Alexis Barber",
        role: "Founder",
        company: "Wharton"
      }
    ]
  },
  {
    title: "EClub x Contrary Half Baked Series",
    date: "2025-04-01",
    endDate: "2025-04-03",
    startTime: "6:00 PM",
    endTime: "8:00 PM",
    location: "TBD",
    description: "A three-day series in collaboration with Contrary, exploring early-stage startup ideas and helping founders refine their concepts. Join for brainstorming, feedback, and networking.",
    tags: ["Workshop", "Ideation", "Collaboration"],
    timeSlots: [
      {
        name: "Day 1: Ideation",
        description: "Brainstorming and initial concept development",
        start: "6:00 PM",
        end: "8:00 PM",
        isVirtual: false
      },
      {
        name: "Day 2: Feedback",
        description: "Targeted feedback sessions on startup concepts",
        start: "6:00 PM",
        end: "8:00 PM",
        isVirtual: false
      },
      {
        name: "Day 3: Presentations",
        description: "Final presentations and celebrations",
        start: "6:00 PM",
        end: "8:00 PM",
        isVirtual: false
      }
    ]
  },
  {
    title: "Beer Debates: Wharton Professors on Entrepreneurship",
    date: "2025-04-02",
    startTime: "5:30 PM",
    endTime: "7:30 PM",
    location: "Second Floor of Drinkers Pub",
    description: "Join us for a lively evening where Wharton professors debate entrepreneurial topics over beer. A great opportunity to hear diverse perspectives in a casual setting.",
    tags: ["Debate", "Social", "Faculty"]
  },
  // {
  //   title: "Launchpad Chat with Stanley Tang",
  //   date: "2025-04-07",
  //   startTime: "5:00 PM",
  //   endTime: "6:30 PM",
  //   location: "TBD",
  //   description: "An exclusive conversation with Stanley Tang, Cofounder of DoorDash, discussing his entrepreneurial journey, challenges, and insights into building a unicorn startup.",
  //   tags: ["Launchpad Chat", "Founder Story", "Unicorn"],
  //   specialNote: "Date is tentative and subject to change. Check back for confirmed details.",
  //   speakers: [
  //     {
  //       name: "Stanley Tang",
  //       role: "Cofounder",
  //       company: "DoorDash"
  //     }
  //   ]
  // },
  {
    title: "Industry Insights with Brian Sommers",
    date: "2025-04-08",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    location: "TBD",
    description: "Learn from Brian Sommers, first sales hire for DoorDash and former International Head of Sales, now founder of his own consultancy startup. Gain valuable insights on scaling sales operations and international expansion strategies.",
    tags: ["Speaker Series", "Sales", "Scaling"],
    speakers: [
      {
        name: "Brian Sommers",
        role: "Founder & Consultant",
        company: "Former DoorDash International Head of Sales"
      }
    ]
  }
];