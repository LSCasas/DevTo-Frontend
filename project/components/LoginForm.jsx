import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import clsx from 'clsx';
import { useState } from 'react';
import { login } from '../api/login'; // Importar la función login desde tu archivo API

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password); // Llamar a la función login desde tu API

      console.log(result); // Agrega esto para verificar la respuesta del servidor

      if (result.success && result.data.token) {
        window.localStorage.setItem('token', result.data.token); // Guardar token en localStorage
        toast.success('Bienvenido');
        router.push('/main'); // Redirigir a /main después del login exitoso
      } else {
        // Manejar errores específicos
        if (result.message === 'Incorrect password') {
          setError('password', { type: 'manual', message: 'Contraseña incorrecta. Por favor, intenta de nuevo.' });
        } else if (result.message === 'User not found') {
          setError('email', { type: 'manual', message: 'Correo electrónico incorrecto. Por favor, intenta de nuevo.' });
        } else {
          setError('form', { type: 'manual', message: 'Correo electrónico y contraseña incorrectos. Por favor, intenta de nuevo.' });
        }
      }
    } catch (error) {
      setError('form', { type: 'manual', message: 'Error en el servidor. Por favor, intente de nuevo más tarde.' });
      console.error("Error en el manejo de la solicitud:", error);
    }
  };

  const handleRegister = () => {
    router.push('/register'); // Redirigir a la página de registro al hacer clic en el botón Register
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
            {...register('email', { required: 'Correo electrónico es requerido' })}
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
            {...register('password', { required: 'Contraseña es requerida' })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          <span
            onClick={handleShowHidePassword}
            className="text-xs text-black/50 cursor-pointer hover:text-black"
          >
            {showPassword ? "🙈 Ocultar " : "🙉 Mostrar"} Contraseña
          </span>
        </div>
        {errors.form && <div className="text-red-500 mb-4">{errors.form.message}</div>}
        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Log in</button>
          <button type="button" onClick={handleRegister} className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
        </div>
      </form>
    </div>
  );
}











