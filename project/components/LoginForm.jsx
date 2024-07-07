import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { login } from '../api/login';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password);

      if (result.success && result.data.token) {
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('email', data.email);
        setNotification({ message: 'Welcome', type: 'success' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
          router.push('/main');
        }, 1000); 
      } else {
        setNotification({ message: 'Incorrect credentials', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'Incorrect credentials', type: 'error' });
      console.error('Error handling request:', error);
    }
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="mb-4 text-center text-2xl font-bold text-black">Login</h2>
      <form id="loginForm" onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={clsx("text-black mt-1 block w-full rounded-md border-black shadow-sm", { 'border-red-500': errors.email })}
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={clsx("text-black mt-1 block w-full rounded-md border-black shadow-sm", { 'border-red-500': errors.password })}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          <span
            onClick={handleShowHidePassword}
            className="text-xs text-black/50 cursor-pointer hover:text-black"
          >
            {showPassword ? "😳 Hide " : "😃 Show"} Password
          </span>
        </div>
        {notification.message && (
          <div className={`p-2 mb-4 text-white rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {notification.message}
          </div>
        )}
        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Log in</button>
          <button type="button" onClick={handleRegister} className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
        </div>
      </form>
    </div>
  );
}


















