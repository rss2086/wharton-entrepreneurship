import Image from "next/image";

export default function StartupWeekPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" id="about">About Startup Week</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Startup Week is our flagship annual event bringing together entrepreneurs, 
              investors, and industry leaders for a week of innovation and networking.
            </p>
            <p className="text-lg mb-4">
              Join us for workshops, panel discussions, pitch competitions, and networking 
              events designed to inspire and connect the next generation of entrepreneurs.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Event Image Placeholder</p>
          </div>
        </div>
      </section>

      <section className="mb-12" id="schedule">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Schedule</h2>
        <div className="space-y-6">
          {scheduleData.map((day, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">{day.date}</h3>
              </div>
              <div className="p-4 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{event.title}</h4>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    <p className="mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12" id="speakers">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakersData.map((speaker, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-500">Speaker Image</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{speaker.name}</h3>
                <p className="text-blue-600">{speaker.role}</p>
                <p className="text-sm text-gray-600 mt-2">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg" id="register">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Register Now</h2>
        <p className="mb-6">
          Secure your spot for Startup Week 2024. Registration is free for UC Berkeley students.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors">
          Register
        </button>
      </section>
    </div>
  );
}

// Sample data
const scheduleData = [
  {
    date: "Monday, April 15",
    events: [
      {
        title: "Opening Ceremony",
        time: "10:00 AM - 11:30 AM",
        type: "Keynote",
        description: "Kickoff event with keynote speakers from leading tech companies."
      },
      {
        title: "Founder Stories Panel",
        time: "1:00 PM - 2:30 PM",
        type: "Panel",
        description: "Hear from successful founders about their entrepreneurial journeys."
      }
    ]
  },
  {
    date: "Tuesday, April 16",
    events: [
      {
        title: "Venture Capital Workshop",
        time: "11:00 AM - 12:30 PM",
        type: "Workshop",
        description: "Learn how to approach VCs and secure funding for your startup."
      },
      {
        title: "Networking Lunch",
        time: "12:30 PM - 2:00 PM",
        type: "Networking",
        description: "Connect with fellow entrepreneurs and industry professionals."
      }
    ]
  }
];

const speakersData = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO, TechStart",
    bio: "Serial entrepreneur with 3 successful exits."
  },
  {
    name: "Sarah Chen",
    role: "Partner, Venture Capital Firm",
    bio: "Invested in over 50 early-stage startups."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, InnovateCorp",
    bio: "Former engineering lead at Google and Meta."
  },
  {
    name: "Priya Patel",
    role: "Founder, HealthTech Solutions",
    bio: "Berkeley alum revolutionizing healthcare technology."
  }
]; 