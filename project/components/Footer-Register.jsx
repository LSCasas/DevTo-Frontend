

const FooterRegister = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="mb-4">DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.</p>
      <ul className="flex flex-wrap justify-center mb-4 space-x-2">
        {['Home', 'Podcasts', 'Videos', 'DEV Help', 'Forem Shop', 'Advertise on DEV', 'DEV Showcase', 'About', 'Contact', 'Guides', 'Software Comparisons'].map((item, index) => (
          <li key={index} className="mx-2">
            {item} {index < 10 && <span className="ml-2">•</span>}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap justify-center mb-4 space-x-2">
        {['Code of Conduct', 'Privacy Policy', 'Terms of use'].map((item, index) => (
          <li key={index} className="mx-2">
            {item} {index < 2 && <span className="ml-2">•</span>}
          </li>
        ))}
      </ul>
      <p className="mb-4">Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
      <p className="mb-4">Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
    </footer>
  );
};

export default FooterRegister;
