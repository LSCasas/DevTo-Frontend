import React from 'react';

const Sidebar = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.location.href = '/main'; // Redirige a la ruta /main cuando se hace clic en un enlace
  };

  return (
    <div className="flex-2 border-none p-5 hidden lg:inline-block md:inline-block w-1/3 pt-5 pr-28 -mr-8">
      {/* Primera sección */}
      <section className="container1 text-black">
        <div className="bg-white rounded-lg shadow-inner">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-600">
              <a href="#discuss" onClick={handleLinkClick}>#discuss</a>
            </h3>
            <p className="text-xs">Discussion threads targeting the whole community</p>
          </div>
          <div className="border-none">
            <div className="p-4 border-b border-gray-200">
              <a href="/main" className="block">What was your win this week?</a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main" className="block">prueba Post</a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main" className="block">Let’s Get Dynamic! Ideas for the Netlify Dynamic Site Challenge</a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main" className="block">El futuro de la IA</a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main" className="block">Data analytics vs data science</a>
              <div className="text-xs">47 comments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="container1 mt-4 text-black">
        <div className="bg-white rounded-lg shadow-inner">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-600">
              <a href="#watercooler" onClick={handleLinkClick}>#watercooler</a>
            </h3>
            <p className="text-xs">Light, and off-topic conversation.</p>
          </div>
          <div className="border-none">
            <div className="p-4">
              <a href="/main" className="block">Caption This! 🤔💭</a>
              <div className="text-xs">6 comments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="container2 mt-4 text-black">
        <div className="border-b border-gray-200">
          <div className="p-4">
            <h4 className="text-gray-600">trending guides/resources</h4>
          </div>
          <div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main">The future of frontend development</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main">GitHub Readme: Responsive? 🤔 Animated? 🤯 Light and dark modes? 😱 You bet! 💪🏼</a>
            </div>
            {/* Otros enlaces omitidos por brevedad */}
          </div>
        </div>
      </section>

      {/* Cuarta sección */}
      <section className="container2 mt-4 text-black">
        <div className="border-b border-gray-200">
          <div className="p-4">
            <h4 className="text-gray-600">recently queried</h4>
          </div>
          <div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main">Programming Discord</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="/main">Dino Tutorial</a>
            </div>
            {/* Otros enlaces omitidos por brevedad */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;

