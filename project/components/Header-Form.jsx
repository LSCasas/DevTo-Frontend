import React from 'react';

const HeaderForm = () => {
  return (
    <header className="header-form bg-white py-4 px-6 shadow text-black">
      <div className="header-container flex items-center justify-between">
        
        {/* División para el logo */}
        <div className="w-1/4 flex items-center">
          <div className="site-logo">
            <img
              className="site-logo-img w-16 h-auto"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community"
            />
          </div>
          <div className="ml-2">
            <h3 className="text-lg font-semibold">Create Post</h3>
          </div>
        </div>
        
        {/* División para Edit y Preview */}
        <div className="w-1/4 flex items-center justify-center">
          <a href="#" className="text-black font-bold mr-4">
            Edit
          </a>
          <a href="#" className="text-black">
            Preview
          </a>
        </div>
        
        {/* División para el botón con la imagen */}
        <div className="w-1/4 flex items-center justify-end">
          <button className="btn-styles p-1">
            <img src="../img/svgs/cancel.svg" alt="Close" className="w-8 h-8" />
          </button>
        </div>
        
      </div>
    </header>
  );
}

export default HeaderForm;
