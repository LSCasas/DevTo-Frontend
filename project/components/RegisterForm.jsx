import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createUser } from "../api/api";

export default function RegisterForm() {
  const router = useRouter();
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [selectedFile, setSelectedFile] = useState(null); // Estado para el archivo seleccionado

  // Manejador de cambio de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Guarda el archivo en el estado
  };

  useEffect(() => {
    const registerForm = document.getElementById("registerForm");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      // Si se ha seleccionado un archivo, intenta subirlo a S3
      if (selectedFile) {
        try {
          // 1. Obtener la URL pre-firmada desde el backend en http://localhost:5000
          const fileData = {
            fileName: selectedFile.name, // Nombre del archivo
            fileType: selectedFile.type, // Tipo de archivo (MIME)
          };
          const presignedUrlResponse = await fetch('http://localhost:5000/api/s3/presigned-url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fileData),
          });

          // Verificar la respuesta de la URL pre-firmada
          if (!presignedUrlResponse.ok) {
            throw new Error('Failed to fetch presigned URL');
          }

          const { url } = await presignedUrlResponse.json();

          // 2. Subir el archivo a S3 utilizando la URL pre-firmada
          const uploadResponse = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': selectedFile.type,
            },
            body: selectedFile,
          });

          if (uploadResponse.ok) {
            // 3. Si la subida fue exitosa, usar la URL pública para la imagen
            data.profilePic = url.split('?')[0]; // URL pública de la imagen en S3
          } else {
            console.error('Error uploading file');
            setNotification({ message: 'Error uploading image', type: 'error' });
            return;
          }
        } catch (error) {
          console.error('Error fetching presigned URL or uploading:', error);
          setNotification({ message: 'Error uploading image', type: 'error' });
          return;
        }
      }

      try {
        // 4. Crear el usuario con los datos, incluyendo la URL de la imagen subida a S3
        const response = await createUser(data);
        console.log("Response:", response); // Debugging: Log response to console

        if (response && response.user) {
          // Acceder a los datos del usuario
          const { name, email } = response.user;
          console.log("User:", name, email);

          setNotification({ message: 'Registration successful', type: 'success' });

          // Redirigir a la página de login después de 1 segundo
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        } else {
          console.error("Registration error:", response);
          setNotification({ message: response?.message || 'Error en el registro', type: 'error' });
        }
      } catch (error) {
        console.error("Request error:", error);
        setNotification({ message: 'Error en la solicitud', type: 'error' });
      }
    };

    // Asigna el manejador de eventos
    registerForm.addEventListener("submit", handleSubmit);

    // Asigna el manejador de cambio de archivo, asegurándose de que el elemento exista
    const profilePicInput = document.getElementById("profilePic");
    if (profilePicInput) {
      profilePicInput.addEventListener("change", handleFileChange);
    }

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      registerForm.removeEventListener("submit", handleSubmit);
      // Verifica si el elemento existe antes de eliminar el listener
      if (profilePicInput) {
        profilePicInput.removeEventListener("change", handleFileChange);
      }
    };
  }, [selectedFile]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="mb-4 text-center text-2xl font-bold text-black">Register</h2>
      <form id="registerForm" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" required />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">Profile Photo</label>
          <input type="file" id="profilePic" name="profilePic" className="text-black mt-1 block w-full rounded-md border-black shadow-sm" accept="image/*" required />
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










  

  
