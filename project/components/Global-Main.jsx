import React from 'react';

const Global = () => {
  return (
    <main className="flex-4 pl-12">
      <header>
        <nav>
          <ul className="flex">
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg">
              <b><a href="index.html" className="text-black">Relevant</a></b>
            </li>
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg">
              <a href="./view/latest.html" className="text-black">Latest</a>
            </li>
            <li className="bg-transparent overflow-hidden m-1 p-2 rounded-lg">
              <a href="./view/top.html" className="text-black">Top</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="w-full h-auto cursor-pointer flex flex-col justify-center items-center mb-3 bg-white border-2 border-gray-200 p-4 rounded-lg">
        <img
          className="max-w-full max-h-96"
          src="https://media.dev.to/cdn-cgi/image/fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4a9p16hwa372gwfnn235.jpg"
          alt="Image Title"
        />

        <div className="w-full mt-4 p-4">
          <div className="post-content">
            <div className="flex items-center mb-3">
              <div className="relative">
                <img
                  className="rounded-md h-8"
                  src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg"
                  alt="Avatar"
                />
                <img
                  className="absolute top-full left-full transform -translate-x-3/4 translate-y-1/2 rounded-full border-2 border-white h-4"
                  src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F05ce9c9d-43b7-4823-a423-f875a94edc27.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="ml-12 text-gray-700 text-sm">
                <div>Michael Tharrington for The DEV Team</div>
                <div>feb 9</div>
              </div>
            </div>

            <div className="pl-4">
              <div className="font-bold mb-1 text-xl text-gray-800 hover:text-blue-600 cursor-pointer" id="firstCard" name="-NxLS0YpFL3MbwAibdxe">
                What was your win this week?
              </div>
              <div className="flex flex-wrap mb-2 text-sm">
                <div className="mr-1 py-1 px-2 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"># <span>discuss</span></div>
                <div className="mr-1 py-1 px-2 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"># <span>weeklyretro</span></div>
                <div className="mr-1 py-1 px-2 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"># <span>discuss</span></div>
                <div className="mr-1 py-1 px-2 border rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"># <span>weeklyretro</span></div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <div className="flex items-center bg-gray-200 border-2 border-white rounded-full overflow-hidden mr-2">
                      <img
                        className="w-6 h-6"
                        src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                        alt="Reaction Icon"
                      />
                    </div>
                    <div className="flex items-center bg-gray-200 border-2 border-white rounded-full overflow-hidden mr-2">
                      <img
                        className="w-6 h-6"
                        src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                        alt="Reaction Icon"
                      />
                    </div>
                    <div className="flex items-center bg-gray-200 border-2 border-white rounded-full overflow-hidden mr-2">
                      <img
                        className="w-6 h-6"
                        src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                        alt="Reaction Icon"
                      />
                    </div>
                    <div className="flex items-center bg-gray-200 border-2 border-white rounded-full overflow-hidden mr-2">
                      <img
                        className="w-6 h-6"
                        src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                        alt="Reaction Icon"
                      />
                    </div>
                  </div>
                  <div className="mr-4">
                    25 <span className="hidden sm:inline">reactions</span>
                  </div>
                  <div className="flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded-lg">
                    <img
                      className="w-6 h-6"
                      src="./img/svg/icon-comment.svg"
                      alt="comment"
                    />
                    <span className="ml-1">49 <span className="hidden sm:inline">comments</span></span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span>1 min read</span>
                  <svg
                    className="w-6 h-6 ml-2 cursor-pointer hover:bg-blue-100 p-1 rounded-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* <path
                      d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z">
                    </path> */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Global;



