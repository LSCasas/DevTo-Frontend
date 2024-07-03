import React from 'react';

const BotonPublicar = () => {
  return (
    <section>
      <div className="ms-5 ps-5">
        <button 
          type="button" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded "
          id="publishBtn"
        >
          Publish
        </button>
      </div>
    </section>
  );
}

export default BotonPublicar;
