import React, { useState, useEffect } from 'react';
import Global from './Global';
import { getPosts } from './api/api';
import { getUsers } from './api/users';

const ParentComponent = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getPosts();
        const fetchedUsers = await getUsers();
        setPosts(fetchedPosts);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Global posts={posts} users={users} />
    </div>
  );
};

export default ParentComponent;



