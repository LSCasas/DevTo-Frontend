

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mt-4 w-15 h-12"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        alt="DEV Community"
      />
      <h1 className="font-bold text-3xl mt-4 text-gray-900">Join the DEV Community</h1>
      <p className="text-lg text-center mt-1 mb-6 text-slate-800">
        DEV Community is a community of 1,456,401 amazing developers
      </p>
    </div>
  );
};

export default Header;
