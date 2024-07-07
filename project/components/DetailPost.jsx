import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProduct } from '../api/getPostByID'; // Asegúrate de que la ruta de importación sea correcta

const DetailPost = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const fetchedPost = await getProduct(postId);
          setPost(fetchedPost);
        } catch (error) {
          setError(error.message);
        }
      };
      fetchPost();
    }
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Otros detalles del post */}
    </div>
  );
};

export default DetailPost;





