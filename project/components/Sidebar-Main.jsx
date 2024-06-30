// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-800">Somos una comunidad dedicada a compartir conocimientos sobre programación, diseño y tecnología en general.</p>
        <h2 className="text-xl font-bold mt-6 mb-4">Redes Sociales</h2>
        <ul className="flex space-x-4">
          <li><a href="#"><svg className="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.94 3.68 9 8.44 9.75V15H7.94V12H10v-2.17c0-2.45 1.46-3.8 3.7-3.8 1.07 0 2.07.16 2.42.23v2.55h-1.66c-1.3 0-1.54.62-1.54 1.53V12h3.08l-.4 3H13v9.67c4.34-.77 7.56-4.76 7.56-9.67C20 6.47 15.53 2 12 2z"/></svg></a></li>
          <li><a href="#"><svg className="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 8.4c.4-.3.8-.7 1-1.2-.4.2-.9.3-1.4.4.5-.3 1-.7 1.5-1-.4.3-.8.5-1.3.7C20.8 6.4 21.4 6 22 5.6c-.4.3-.9.6-1.4.8-.6-.5-1.4-.8-2.2-.8-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .4.1.6-2.6-.1-5.1-.7-7.4-1.8-.2.5-.3 1-.3 1.6 0 1.1.6 2.1 1.5 2.7-.6 0-1.1-.2-1.6-.5v.1c0 1.6 1.2 3 2.7 3.3-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.2 1.5 2.1 2.9 2.1-1.1.9-2.5 1.4-4.1 1.4-.3 0-.7 0-1-.1 1.5.9 3.3 1.5 5.2 1.5 6.2 0 9.6-5.2 9.6-9.6v-.4c.7-.5 1.2-1.2 1.5-2.1z"/></svg></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
