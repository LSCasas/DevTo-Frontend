// pages/post/[id].js (o pages/post/[id].jsx)

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DetailPost from '../../components/DetailPost'; // Ajusta la ruta según la ubicación real de DetailPost.jsx
import { getPostByID } from '../../api/api'; // Ajusta la ruta según la ubicación real de tu función de API

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostByID(id);
        setPost(fetchedPost);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post Detail</h1>
      <DetailPost post={post} />
    </div>
  );
};

export default PostDetailPage;

