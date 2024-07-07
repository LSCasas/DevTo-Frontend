import React from 'react';
import DetailPost from '@/components/DetailPost'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos
import HeaderMain from '@/components/Header-Main';

const Detail = () => {
  return (
    <div className="bg-gray-100">
      <HeaderMain />
      <div>
        <h2>Detalles del Post</h2>
        <DetailPost />
      </div>
    </div>
  );
};

export default Detail;
