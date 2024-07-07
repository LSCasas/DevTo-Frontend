import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPosts } from '@/api/getPostByID';


const DetailPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');


  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const fetchedPost = await getPosts(id);
          setPost(fetchedPost.data); // Guarda solo los datos del post en el estado
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post. Please try again later.');
      }
    };
  
    fetchPost();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ maxWidth: '100%' }} />
      <p>{post.body}</p>
      {/* Otros detalles del post */}
    </div>
  );
};

export default DetailPost;








