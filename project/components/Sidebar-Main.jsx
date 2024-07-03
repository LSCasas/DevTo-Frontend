import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex-2 border-none p-5 hidden lg:inline-block md:inline-block w-1/3 pt-5 pr-28 -mr-8">
      {/* Primera sección */}
      <section className="container1 text-black">
        <div className="bg-white rounded-lg shadow-inner">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-600">
              <a href="#discuss">#discuss</a>
            </h3>
            <p className="text-xs">Discussion threads targeting the whole community</p>
          </div>
          <div className="border-none">
            <div className="p-4 border-b border-gray-200">
              <a href="https://desaf-o-js.vercel.app/views/detalleCard.html?key=-NxLS0YpFL3MbwAibdxe" className="block">
                What was your win this week?
              </a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="https://desaf-o-js.vercel.app/views/detalleCard.html?key=-NxLS0YpFK3MbwAibdxe" className="block">
                prueba Post
              </a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="https://desaf-o-js.vercel.app/views/detalleCard.html?key=-NxLSmBHzQv1rO810ZOe" className="block">
                Let’s Get Dynamic! Ideas for the Netlify Dynamic Site Challenge
              </a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="https://desaf-o-js.vercel.app/views/detalleCard.html?key=-NxP_mYNn7bDXqmb9ZYh" className="block">
                El futuro de la IA
              </a>
              <div className="text-xs">47 comments</div>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="https://desaf-o-js.vercel.app/views/detalleCard.html?key=-NxU6eUSMawTZFwsGLVZ" className="block">
                Data analytics vs data science
              </a>
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
              <a href="#watercooler">#watercooler</a>
            </h3>
            <p className="text-xs">Light, and off-topic conversation.</p>
          </div>
          <div className="border-none">
            <div className="p-4">
              <a className="block">Caption This! 🤔💭</a>
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
              <a href="">The future of frontend development</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">GitHub Readme: Responsive? 🤔 Animated? 🤯 Light and dark modes? 😱 You bet! 💪🏼</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">10 Programming Languages Worth Learning in 2024</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">✨ Top 5 Underrated Open Source Projects that no one talks about 🫵🤐</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">What is the ideal Tech stack to build a website in 2024? 👨‍💻</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Optimizing SQL Queries by 23x!!!</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Modern Data Engineering RoadMap - 2024</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Git Good: Best Practices for Branch Naming and Commit Messages</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">So I completed Replit's free 100 Days of Python course</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">From Next.js to Rails then Elixir: My journey through React.js burnout</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">UUID in PostgreSQL</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">1 billion rows challenge in PostgreSQL and ClickHouse</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">S.O.L.I.D: The 5 Golden Rules to Level Up Your Coding Skills</a>
            </div>
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
              <a href="">Programming Discord</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Dino Tutorial</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Clean Architecture</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Sublime Text vs Vscode</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Strikethrough Text Twitter</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">GCC for Windows</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Django Allauth</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Best VSCode Themes</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Landing Page Template</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Free Apis</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Line-height CSS</a>
            </div>
            <div className="p-4 border-b border-gray-200">
              <a href="">Spotify Shuffle Sucks</a>
            </div>
            <div className="p-4">
              <a href="">JavaScript Reverse String</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
