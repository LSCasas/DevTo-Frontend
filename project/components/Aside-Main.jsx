import React from 'react';

const Aside = () => {
    return (
        <aside className="asideods hidden md:block mx-2 crayons-layout__sidebar-left">
            <nav className="mb-4 mt-4">
                <ul className='text-black'>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Home.svg" alt="Home" className="w-6 h-6" />
                            </span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Podcast.svg" alt="Podcast" className="w-6 h-6" />
                            </span>
                            Podcast
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Videos.svg" alt="Videos" className="w-6 h-6" />
                            </span>
                            Videos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Tags.svg" alt="Tags" className="w-6 h-6" />
                            </span>
                            Tags
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/FAQ.svg" alt="FAQ" className="w-6 h-6" />
                            </span>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/ForemShop.svg" alt="Forem Shop" className="w-6 h-6" />
                            </span>
                            Forem Shop
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/AdvertiseonDev.svg" alt="Advertise on DEV" className="w-6 h-6" />
                            </span>
                            Advertise on DEV
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/About.svg" alt="About" className="w-6 h-6" />
                            </span>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Contact.svg" alt="Contact" className="w-6 h-6" />
                            </span>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/Guides.svg" alt="Guides" className="w-6 h-6" />
                            </span>
                            Guides
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/SoftwareComparasions.svg" alt="Software comparisons" className="w-6 h-6" />
                            </span>
                            Software comparisons
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="mb-4 mt-4">
                <h2 className="crayons-subtitle-3 p-2 text-black">Other</h2>
                <ul className='text-black'>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/CodeofConduct.svg" alt="Code of Conduct" className="w-6 h-6" />
                            </span>
                            Code of Conduct
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/PrivacyPolicy.svg" alt="Privacy Policy" className="w-6 h-6" />
                            </span>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            <span className="c-link__icon">
                                <img src="./img/svgs/TermsofUse.svg" alt="Terms of use" className="w-6 h-6" />
                            </span>
                            Terms of use
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-start mb-4 text-black">
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/twitter.svg" alt="twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/facebook.svg" alt="facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/github.svg" alt="github" className="w-6 h-6" />
                </a>
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/instagram.svg" alt="instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/twitch.svg" alt="twitch" className="w-6 h-6" />
                </a>
                <a href="#" className="c-link c-link--icon-alone c-link--blockods p-2">
                    <img src="./img/svgs/mastodon.svg" alt="mastodon" className="w-6 h-6" />
                </a>
            </div>
            <nav className="mb-6 text-black">
                <h3 className="crayons-subtitle-3 p-2">Popular Tags</h3>
                <div className="overflow-y-auto" style={{ maxHeight: '42vh' }}>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #webdev
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #javascript
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #beginners
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #programming
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #tutorial
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #productivity
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #python
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #career
                        </a>
                    </div>
                    <div className="py-3 pl-3">
                        <a href="#" className="c-link c-link--blockods flex items-center p-2 hover:text-blue-600 hover:bg-gray-200">
                            #career
                        </a>
                    </div>
                </div>
            </nav>
            <footer className="text-xs text-left text-gray-500ods">
                © 2024 DEV Community - A constructive and inclusive social network for software developers. With you every step of your journey.
            </footer>
        </aside>
    );
}

export default Aside;

