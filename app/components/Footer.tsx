import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <Image
                src="/eclub-logo.png"
                alt="Wharton Entrepreneurship Club Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-blue-700 text-lg leading-tight transition-colors">Wharton</span>
                <span className="text-sm text-gray-600 leading-tight">Entrepreneurship Club</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-6 text-sm">
              Empowering the next generation of entrepreneurs at the Wharton School of the University of Pennsylvania.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/whartoneclub/" icon="instagram" />
              <SocialLink href="https://www.linkedin.com/company/wharton-eclub/" icon="linkedin" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/startup-week">Startup Week</FooterLink>
              <FooterLink href="/calendar">Calendar</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-700 mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/whartoneclub/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/wharton-eclub/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-700 mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/resources">Resource Library</FooterLink>
              <FooterLink href="/mentorship">Mentorship</FooterLink>
              <FooterLink href="/funding">Venture Initiation Program</FooterLink>
              <FooterLink href="/partners">Partners & Sponsors</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-blue-700 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-500 text-sm">
              <p>Wharton Entrepreneurship Club</p>
              <p>The Wharton School</p>
              <p>University of Pennsylvania</p>
              <p>3730 Walnut Street</p>
              <p>Philadelphia, PA 19104</p>
              <p className="mt-2">
                <a href="mailto:entrepreneurship@wharton.upenn.edu" className="text-blue-600 hover:text-blue-800 transition-colors">
                  entrepreneurship@wharton.upenn.edu
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Wharton Entrepreneurship Club. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://www.upenn.edu/about/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-500 hover:text-blue-700 transition-colors relative inline-block group"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-blue-700 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
      aria-label={icon}
    >
      <span className="sr-only">{icon}</span>
      {icon === "twitter" && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )}
      {icon === "instagram" && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )}
    </a>
  );
} 