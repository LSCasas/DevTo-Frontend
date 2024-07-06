import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'sonner'; // Asumiendo que `sonner` es compatible con Next.js

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formulario enviado");

    const loginService = "https://back-project-lbqr.onrender.com/auth/login"; // Endpoint actualizado

    const requestBody = { email, password };
    console.log("Datos del formulario:", requestBody);

    try {
      const response = await fetch(loginService, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      console.log("Respuesta de la solicitud:", response);

      const data = await response.json();
      console.log("Datos de la respuesta:", data);

      if (response.ok && data.success) {
        console.log("Inicio de sesión exitoso");
        localStorage.setItem('token', data.token); // Guardar token en localStorage
        toast.success('Bienvenido');
        router.push('/main'); // Redirigir a /main después del login exitoso
      } else if (response.status === 401 && data.message === 'Incorrect password') {
        setError('Contraseña incorrecta. Por favor, intenta de nuevo.');
        console.log("Contraseña incorrecta:", data.message);
      } else if (response.status === 401 && data.message === 'User not found') {
        setError('Correo electrónico incorrecto. Por favor, intenta de nuevo.');
        console.log("Correo electrónico incorrecto:", data.message);
      } else {
        setError('Correo electrónico y contraseña incorrectos. Por favor, intenta de nuevo.');
        console.log("Error en el login:", data.message);
      }
    } catch (error) {
      setError('Error en el servidor. Por favor, intente de nuevo más tarde.');
      console.error("Error en el manejo de la solicitud:", error);
    }
  };

  const handleRegister = () => {
    router.push('/register'); // Redirigir a la página de registro al hacer clic en el botón Register
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="mb-4 text-center text-2xl font-bold text-black">Login</h2>
      <form id="loginForm" onSubmit={handleSubmit} method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Log in</button>
          <button type="button" onClick={handleRegister} className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</button>
        </div>
      </form>
    </div>
  );
}








