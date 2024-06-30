export default function RegisterForm() {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="mb-4 text-center text-2xl font-bold">Registro de Usuario</h2>
        <form id="registerForm" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">URL de la foto de perfil</label>
            <input type="url" id="profilePic" name="profilePic" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
          </div>
          <div className="text-center">
            <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Registrarse</button>
          </div>
        </form>
      </div>
    );
  }
  
