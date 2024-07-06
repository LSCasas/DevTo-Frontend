import React, { useState, useEffect } from 'react';
import Aside from '@/components/Aside-Main';
import Global from '@/components/Global-Main';
import HeaderMain from '@/components/Header-Main';
import Sidebar from '@/components/Sidebar-Main';
import { getPosts } from '@/api/post'; // Corregido: importa getPosts desde api/posts

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(); // Corregido: llama a getPosts en lugar de getpost
        if (response.success) {
          setPosts(response.data); // Asigna el arreglo de posts a la variable de estado
        } else {
          console.error("Error al obtener posts:", response.message);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100">
      <HeaderMain />
      <div className="lg:flex">
        <Aside />
        <Global posts={posts} /> {/* Pasa los posts como prop al componente Global */}
        <Sidebar />
      </div>
    </div>
  );
};

export default App;







