export default function RegisterForm() {
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
            <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
  
