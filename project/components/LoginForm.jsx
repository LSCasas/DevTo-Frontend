import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <form className="flex flex-col items-center w-full md:w-1/2">
        <input
          type="email"
          placeholder="Email"
          className="w-3/4 p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          className="w-3/4 p-3 mb-4 text-white bg-gray-900 border border-gray-300 rounded-md hover:bg-gray-800 focus:outline-none focus:border-gray-400"
        >
          Continue
        </button>
      </form>
      <div className="flex flex-col items-center mt-4">
        <span className="text-xs text-gray-500">
          * Please sign up with one of these supported services
        </span>
        <span className="text-xs text-gray-500">
          * We won't post to any of your accounts without asking first
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
