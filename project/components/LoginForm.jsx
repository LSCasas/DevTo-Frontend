// LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <form className="flex flex-col items-center w-full">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          className="w-full p-3 mb-4 text-white bg-gray-900 border border-gray-300 rounded-md hover:bg-gray-800 focus:outline-none focus:border-gray-400"
        >
          Continue
        </button>
      </form>
      <div className="flex flex-col items-center mt-4">
        <span className="text-xs text-gray-500">
          By signing up, you are agreeing to our <span className='text-blue-500'>privacy policy, terms of use</span>
        </span>
        <span className="text-xs text-gray-500">
          and <span className='text-blue-500'>code of conduct.</span>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
