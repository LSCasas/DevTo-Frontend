import React from 'react';

const Aside = () => {
  return (
    <aside className="hidden lg:block mx-1 p-2 box-border pl-14">
      <nav className="mb-4 mt-4">
        <ul className="text-black">
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Home.svg" alt="Home" className="w-full h-full" />
            </span>
            Home
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Podcast.svg" alt="Podcast" className="w-full h-full" />
            </span>
            Podcast
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Videos.svg" alt="Videos" className="w-full h-full" />
            </span>
            Videos
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Tags.svg" alt="Tags" className="w-full h-full" />
            </span>
            Tags
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/FAQ.svg" alt="FAQ" className="w-full h-full" />
            </span>
            FAQ
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/ForemShop.svg" alt="Forem Shop" className="w-full h-full" />
            </span>
            Forem Shop
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/AdvertiseonDev.svg" alt="Advertise on DEV" className="w-full h-full" />
            </span>
            Advertise on DEV
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/About.svg" alt="About" className="w-full h-full" />
            </span>
            About
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Contact.svg" alt="Contact" className="w-full h-full" />
            </span>
            Contact
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/Guides.svg" alt="Guides" className="w-full h-full" />
            </span>
            Guides
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/SoftwareComparasions.svg" alt="Software comparisons" className="w-full h-full" />
            </span>
            Software comparisons
          </li>
        </ul>
      </nav>
      <nav className="mb-4 mt-4">
        <h2 className="text-black text-base p-2">Other</h2>
        <ul className="text-black">
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/CodeofConduct.svg" alt="Code of Conduct" className="w-full h-full" />
            </span>
            Code of Conduct
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/PrivacyPolicy.svg" alt="Privacy Policy" className="w-full h-full" />
            </span>
            Privacy Policy
          </li>
          <li className="flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            <span className="inline-block w-6 h-6">
              <img src="/img/svgs/TermsofUse.svg" alt="Terms of use" className="w-full h-full" />
            </span>
            Terms of use
          </li>
        </ul>
      </nav>
      <div className="flex justify-start mb-4 text-black">
        <div className="inline-block p-2">
          <img src="/img/svgs/twitter.svg" alt="twitter" className="w-6 h-6" />
        </div>
        <div className="inline-block p-2">
          <img src="/img/svgs/facebook.svg" alt="facebook" className="w-6 h-6" />
        </div>
        <div className="inline-block p-2">
          <img src="/img/svgs/github.svg" alt="github" className="w-6 h-6" />
        </div>
        <div className="inline-block p-2">
          <img src="/img/svgs/instagram.svg" alt="instagram" className="w-6 h-6" />
        </div>
        <div className="inline-block p-2">
          <img src="/img/svgs/twitch.svg" alt="twitch" className="w-6 h-6" />
        </div>
        <div className="inline-block p-2">
          <img src="/img/svgs/mastodon.svg" alt="mastodon" className="w-6 h-6" />
        </div>
      </div>
      <nav className="mb-6 text-black">
        <h3 className="text-black text-sm p-2">Popular Tags</h3>
        <div className="overflow-y-auto" style={{ maxHeight: '42vh' }}>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #webdev
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #javascript
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #beginners
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #programming
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #tutorial
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #productivity
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #python
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #career
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #opensource
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #discuss
          </div>
          <div className="py-3 pl-3 flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
            #showdev
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;

