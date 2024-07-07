import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createUser } from "../api/api";

export default function RegisterForm() {
  const router = useRouter();
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    const registerForm = document.getElementById("registerForm");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);

      const data = {
        name: formData.get("name"),
        profilePic: formData.get("profilePic"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      try {
        const response = await createUser(data);
        console.log("Response:", response); // Debugging: Log response to console

        if (response && response.user) {
          // Access user data
          const { name, email } = response.user;
          console.log("User:", name, email);

          setNotification({ message: 'Registration successful', type: 'success' });
          setTimeout(() => {
            setNotification({ message: '', type: '' });
            router.push('/login');
          }, 1000); // Redirect to login after 1 second
        } else {
          console.error("Registration error:", response);
          setNotification({ message: response?.message || 'Error en el registro', type: 'error' });
        }
      } catch (error) {
        console.error("Request error:", error);
        setNotification({ message: 'Error en la solicitud', type: 'error' });
      }
    };

    registerForm.addEventListener("submit", handleSubmit);

    return () => {
      registerForm.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="mb-4 text-center text-2xl font-bold text-black">Register</h2>
      <form id="registerForm" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">Profile photo URL</label>
          <input type="url" id="profilePic" name="profilePic" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Sign up</button>
        </div>
      </form>
      {notification.message && (
        <div className={`p-2 mb-4 text-white rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}





  

  
