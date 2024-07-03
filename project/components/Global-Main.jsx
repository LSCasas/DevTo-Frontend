import React from 'react';

const Global = () => {
  return (
    <main className="flex-4 pl-12">
      <header>
        <nav>
          <ul className="flex">
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg"><b><a href="index.html" className="text-black">Relevant</a></b></li>
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg"><a href="./view/latest.html" className="text-black">Latest</a></li>
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg"><a href="./view/top.html" className="text-black">Top</a></li>
          </ul>
        </nav>
      </header>

      <div className="w-full h-auto cursor-pointer flex justify-center items-center mb-3 bg-white border-2 border-gray-200 p-4 rounded-lg">
        <img
          className="max-w-full max-h-96"
          src="https://media.dev.to/cdn-cgi/image/fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4a9p16hwa372gwfnn235.jpg"
          alt="Image Title"
        />
        <div className="p-1">
          {/* Content here */}
        </div>
      </div>
    </main>
  );
};

export default Global;

