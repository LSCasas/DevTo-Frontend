import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa Axios u otro método para obtener datos de una API

import Global from './Global-Main'; // Asegúrate de importar correctamente el componente GlobalMain

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde una API (usando Axios)
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get('https://back-project-lbqr.onrender.com/post');
        setPosts(postsResponse.data.posts); // Asigna los posts obtenidos del servidor
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get('https://back-project-lbqr.onrender.com/users');
        setUsers(usersResponse.data.users); // Asigna los usuarios obtenidos del servidor
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Llama a las funciones para obtener posts y usuarios
    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <Global posts={posts} users={users} />
    </div>
  );
};

export default MainContainer;








