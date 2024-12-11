// pages/post/[id].js (o pages/post/[id].jsx)

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DetailPost from '../../components/DetailPost'; 
import { getPostByID } from '../../api/api'; 

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



  return (
    <div>
      <DetailPost post={post} />
    </div>
  );
};

export default PostDetailPage;

