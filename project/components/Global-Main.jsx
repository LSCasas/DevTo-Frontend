import React from 'react';

const Global = () => {
  return (
    <main className="posts">
      <header>
        <nav>
          <ul className="flex">
            <li className="tag-header"><b><a href="index.html" className="no-underline text-black">Relevant</a></b></li>
            <li className="tag-header"><a href="./view/latest.html" className="no-underline text-black">Latest</a></li>
            <li className="tag-header"><a href="./view/top.html" className="no-underline text-black">Top</a></li>
          </ul>
        </nav>
      </header>

      <div className="card post-section space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
        <img className="post-image w-full" src="https://media.dev.to/cdn-cgi/image/fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4a9p16hwa372gwfnn235.jpg" alt="Image Title" />
        <div className="post-content">
          <div className="post-title">
            <div className="post-meta flex items-center">
              <div className="post-author">
                <img className="avatar rounded-full w-12 h-12" src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg" alt="Avatar" />
                <img className="avatar rounded-full w-12 h-12" src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F38578%2F05ce9c9d-43b7-4823-a423-f875a94edc27.jpg" alt="Avatar" />
              </div>
              <div className="post-title-info ml-4 text-sm text-gray-700">
                <div>Michael Tharrington for The DEV Team</div>
                <div>feb 9</div>
              </div>
            </div>
          </div>
          <div className="post-indention">
            <div className="title cursor-pointer text-xl font-bold">What was your win this week?</div>
            <div className="tags flex flex-wrap mt-2">
              <div className="card tag bg-gray-100 mr-2 mb-2"># <span>discuss</span></div>
              <div className="card tag bg-gray-100 mr-2 mb-2"># <span>weeklyretro</span></div>
              <div className="card tag bg-gray-100 mr-2 mb-2"># <span>discuss</span></div>
              <div className="card tag bg-gray-100 mr-2 mb-2"># <span>weeklyretro</span></div>
            </div>
            <div className="bottom flex justify-between items-center mt-4">
              <div className="details flex items-center">
                <div className="card reactions flex items-center">
                  <span className="reaction-icon"><img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="24" height="24" alt="Fire icon" /></span>
                  <span className="reaction-icon"><img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" width="24" height="24" alt="Raised hands icon" /></span>
                  <span className="reaction-icon"><img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" width="24" height="24" alt="Unicorn icon" /></span>
                  <span className="reaction-icon"><img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" width="24" height="24" alt="Sparkle heart icon" /></span>
                </div>
                <div className="reactions-counter text-sm ml-2">25 <span className="hidden sm:inline">reactions</span></div>
                </div>
              <div className="card comments flex items-center ml-auto">
                <img className="icon h-4 mr-1" src="./img/svg/icon-comment.svg" alt="comment icon" /> 49 <span className="hidden sm:inline">comments</span>
              </div>
            </div>
            <div className="save mt-2 text-sm">1 min read <svg className="icon icon-bookmark ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"/></svg></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Global;

