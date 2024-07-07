// pages/posts/[postId].jsx
import React from 'react';
import DetailPost from '../../components/DetailPost'; // Ajusta la ruta según la ubicación real de DetailPost.jsx

const PostDetailPage = ({ postId }) => {
  // Aquí podrías obtener postId desde el contexto de Next.js o desde otras fuentes (ej. query params)
  return (
    <div>
      <h1>Post Detail</h1>
      <DetailPost postId={postId} />
    </div>
  );
};

export default PostDetailPage;

// Nota: Asegúrate de que postId esté disponible en el contexto de esta página dinámica.

