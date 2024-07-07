import React from 'react';
import Link from 'next/link';

const HeaderForm = () => {
  return (
    <header className="header-form bg-none py-4 px-6 shadow text-black">
      <div className="header-container flex items-center justify-between">
        
        {/* División para el logo y texto */}
        <div className="w-1/4 flex items-center ml-14">
          <div className="site-logo">
            <Link href="/main" passHref>
              <img
                className="site-logo-img w-16 h-auto md:w-20 md:h-auto" 
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="DEV Community"
              />
            </Link>
          </div>
          <div className="ml-2 hidden md:block"> 
            <h3 className="text-lg font-semibold">Create Post</h3>
          </div>
        </div>
        
        {/* División para Edit y Preview */}
        <div className="w-1/4 flex items-center justify-center">
          <a className="text-black font-bold mr-4">Edit</a>
          <a className="text-black">Preview</a>
        </div>
        
        {/* División para el botón con la imagen */}
        <div className="w-1/4 flex items-center justify-end">
          <button className="btn-styles p-1">
            <Link href="/main" passHref>
              <img src="../img/svgs/cancel.svg" alt="Close" className="w-8 h-8" />
            </Link>
          </button>
        </div>
        
      </div>
    </header>
  );
}

export default HeaderForm;




