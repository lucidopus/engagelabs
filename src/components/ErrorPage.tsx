import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Error = () => {
  return (
    <div className="bg-gradient-to-b from-[#001f2b] to-[#003344] min-h-screen flex flex-col items-center justify-center text-white">
      <Head>
        <title>404 - Page Not Found | EngageLabs</title>
      </Head>
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <p className="mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link href="/" className="bg-[#00b8d9] text-white px-6 py-3 rounded text-lg">
          Return to Homepage
        </Link>
      </main>
    </div>
  );
};

export default Error;