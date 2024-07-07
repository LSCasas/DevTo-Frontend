import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPosts } from '@/api/getPostByID';
import HeaderMain from './Header-Main';

const DetailPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const fetchedPost = await getPosts(id);
          setPost(fetchedPost.data); 
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post. Please try again later.');
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
    <div className="bg-gray-200 min-h-screen">
      <HeaderMain />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 flex space-x-8">
        {/* Botones a la izquierda del detalle del post */}
        <div className="flex flex-col items-center">
          <button className="bg-red-100 px-4 py-2 rounded-md mb-2">
            <span>❤️</span> <span>13</span>
          </button>
          <button className="bg-blue-100 px-4 py-2 rounded-md mb-2">
            <span>💬</span> <span>3</span>
          </button>
          <button className="bg-green-100 px-4 py-2 rounded-md">
            <span>🔔</span> <span>2</span>
          </button>
        </div>

        {/* Detalle del post */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md text-black">
          <img src={post.image} alt={post.title} className="my-4" style={{ maxWidth: '100%' }} />
          <div>
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg">{post.body}</p>
            {/* Otros detalles del post */}
          </div>
        </div>
      </div>

      {/* Sección de comentarios */}
      <div className="mt-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mt-8 flex items-start bg-white text-black p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img src="https://api.dicebear.com/9.x/micah/svg" alt="Avatar" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-bold">Random Name</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu scelerisque ligula.</p>
              <div className="flex mt-2">
                <button className="flex items-center space-x-1 bg-red-100 px-4 py-2 rounded-md">
                  <span>❤️</span>
                  <span>5</span>
                </button>
                <button className="flex items-center space-x-1 bg-blue-100 px-4 py-2 rounded-md ml-2">
                  <span>💬</span>
                  <span>2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mt-8 flex items-start bg-white text-black p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img src="https://api.dicebear.com/9.x/lorelei/svg" alt="Avatar" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-bold">Random Name</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu scelerisque ligula.</p>
              <div className="flex mt-2">
                <button className="flex items-center space-x-1 bg-red-100 px-4 py-2 rounded-md">
                  <span>❤️</span>
                  <span>1</span>
                </button>
                <button className="flex items-center space-x-1 bg-blue-100 px-4 py-2 rounded-md ml-2">
                  <span>💬</span>
                  <span>0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mt-8 flex items-start bg-white text-black p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img src="https://api.dicebear.com/9.x/open-peeps/svg" alt="Avatar" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-bold">Random Name</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu scelerisque ligula.</p>
              <div className="flex mt-2">
                <button className="flex items-center space-x-1 bg-red-100 px-4 py-2 rounded-md">
                  <span>❤️</span>
                  <span>3</span>
                </button>
                <button className="flex items-center space-x-1 bg-blue-100 px-4 py-2 rounded-md ml-2">
                  <span>💬</span>
                  <span>1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default DetailPost;






























