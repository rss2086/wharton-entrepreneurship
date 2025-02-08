import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto text-center">
        <p className="text-base font-semibold text-blue-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10">
          <Link 
            href="/"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
