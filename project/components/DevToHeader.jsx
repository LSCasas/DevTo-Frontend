import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const DevToHeader = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Verificar si localStorage está disponible (solo en el cliente)
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center h-16">
        {/* Mobile Hamburger Button */}
        <span className="inline-block md:hidden mr-2">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-labelledby="menu-icon"
              className="fill-current text-gray-700"
            >
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        </span>
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DEV Community"
            className="h-10"
          />
        </div>
        {/* Search */}
        <div className="flex-1 ml-4 md:ml-8">
          <div className="relative w-1/2">
            {/* Aquí puedes agregar un componente de búsqueda si es necesario */}
          </div>
        </div>
        {/* Auth Links */}
        <div className="flex items-center ml-auto space-x-4">
          {/* Conditional rendering based on token */}
          {token ? (
            <Link href="/posts">
              <a className="text-blue-700 border border-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300">
                Create Post
              </a>
            </Link>
          ) : (
            <>
              {/* Mobile Account and Login */}
              <span className="hidden md:flex">
                <Link href="/login">
                  <a className="text-gray-700 hover:text-blue-700">Log in</a>
                </Link>
              </span>
              <Link href="/register">
                <a className="text-blue-700 border border-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300">
                  Create account
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default DevToHeader;

