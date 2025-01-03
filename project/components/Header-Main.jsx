import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HeaderMain = () => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleCreatePost = () => {
    router.push('/posts'); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
   
    router.push('/login');
  };

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
        <div className="flex-1 ml-4 md:ml-8 text-black hidden md:flex">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="block w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-0 top-0 mt-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="fill-current text-gray-400"
              >
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Auth Links */}
        <div className="flex items-center ml-auto space-x-4">
          {/* Conditional rendering based on token */}
          {token ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-xs transition-colors duration-300"
                onClick={handleCreatePost}
              >
                Create post
              </button>
              <button
                className="text-blue-700 border border-blue-700 px-2 py-1 rounded-md text-xs hover:bg-blue-700 hover:text-white transition-colors duration-300"
                onClick={handleLogout}
              >
                Log out
              </button>
              {/* Image icon */}
              <img
                src="https://api.dicebear.com/9.x/thumbs/svg" 
                alt="Log out"
                className="h- w-9 ml-2 rounded-full"
              />
            </>
          ) : (
            <>
              {/* Mobile Account and Login */}
              <span className="hidden md:flex">
                <button className="text-gray-700 hover:text-blue-700" onClick={handleLogin}>
                  Log in
                </button>
              </span>
              <button
                className="text-blue-700 border border-blue-700 px-2 py-1 rounded-md text-xs hover:bg-blue-700 hover:text-white transition-colors duration-300"
                onClick={handleRegister}
              >
                Create account
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;







