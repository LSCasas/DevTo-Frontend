import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex-2 border-none p-5 lg:inline-block md:inline-block w-1/3 pt-5 pr-28 -mr-8">
      {/* Primera sección */}
      <section className="container1 text-black">
        <div className="bg-white rounded-lg shadow-inner">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-600">
              #discuss
            </h3>
            <p className="text-xs">Discussion threads targeting the whole community</p>
          </div>
          <div className="border-none">
            <div className="p-4 border-b border-gray-200">
              What was your win this week?
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              prueba Post
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              Let’s Get Dynamic! Ideas for the Netlify Dynamic Site Challenge
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              El futuro de la IA
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              Data analytics vs data science
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
              #watercooler
            </h3>
            <p className="text-xs">Light, and off-topic conversation.</p>
          </div>
          <div className="border-none">
            <div className="p-4">
              Caption This! 🤔💭
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
              The future of frontend development
            </div>
            <div className="p-4 border-b border-gray-200">
              GitHub Readme: Responsive? 🤔 Animated? 🤯 Light and dark modes? 😱 You bet! 💪🏼
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
              Programming Discord
            </div>
            <div className="p-4 border-b border-gray-200">
              Dino Tutorial
            </div>
            {/* Otros enlaces omitidos por brevedad */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;



