# Wharton E-Club Website

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38b2ac?style=flat-square&logo=tailwind-css)
![Bun](https://img.shields.io/badge/Bun-latest-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)

The official website for Wharton's largest student-run organization focused on entrepreneurship. E-Club provides resources, events, and networking opportunities for aspiring founders.

## ✨ Features

- **Interactive UI** with smooth animations and transitions
- **Responsive design** that looks great on all devices
- **Modern architecture** using Next.js App Router
- **Performant loading** with optimized images and components
- **Event calendar** showcasing upcoming entrepreneurial activities
- **Leadership showcase** featuring the E-Club team

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & Lottie
- **Package Manager**: Bun
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/wharton/eclub-nextjs.git
cd eclub-nextjs
```

2. Install dependencies
```bash
bun install
```

3. Start the development server
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📋 Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run linting checks

## 📂 Project Structure

```
eclub-nextjs/
├── app/               # Application routes and components
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── calendar/      # Events calendar page
│   ├── startup-week/  # Startup week page
│   └── page.tsx       # Home page
├── public/            # Static assets
├── next.config.ts     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## 🔑 Key Components

- **HeroSection**: Landing section with animated rocket
- **Features**: Highlights E-Club benefits
- **LeadershipTeam**: Showcases E-Club leadership
- **Sponsored**: Information for potential sponsors
- **LogoMarquee**: Scrolling display of partner organizations

## 📱 Screenshots

*[Add screenshots or GIFs of your application here]*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

All rights reserved. This codebase is the property of E-Club, Wharton School, University of Pennsylvania.

---

*Made with ❤️ by E-Club Development Team*
