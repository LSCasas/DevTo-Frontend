import React from 'react';

const FormularioPost = () => {
  return (
    <form id="form-data" className="m-0 bg-transparent text-black max-w-4xl mx-auto ml-2">
      <div className="flex flex-col gap-4 p-4 bg-transparent">
        {/* Primer div: card-form-top */}
        <div className="card-form-top bg-white p-4 rounded-md" >
          <input
            className="input-tags my-4 w-3/12"
            type="text"
            placeholder="Photo"
            name="img"
          />
          <input
            className="title-form w-full text-5xl text-gray-800"
            type="text"
            placeholder="New post title here..."
            name="title"
            id="idTitle"
          />
          <div className="flex items-center">
            <div id="labelContainer"></div>
            <input
              className="input-tags w-full mt-3"
              type="text"
              placeholder="Add up to 4 tags"
              name="tags"
              id="textInput"
            />
          </div>
          <div className="reaccions my-4 flex items-center">
            <label className="w-1/6 font-bold">Reactions:</label>
            <input
              className="input-tags w-2/6"
              type="number"
              min="1"
              placeholder="Reaction number"
              name="reactions"
            />
            <label className="w-1/6 font-bold">Rating:</label>
            <input
              className="input-tags w-2/6"
              type="number"
              min="1"
              max="10"
              placeholder="Rating number"
              name="rating"
            />
          </div>
        </div>
        
        {/* Segundo div: iconos-svgs */}
        <div className="iconos-svgs p-4 flex gap-1 justify-start bg-transparent">
          <button className="btn-styles">
            <img src="/img/svgs/B.svg" alt="B" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/italicImg.svg" alt="Italic" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/linksImg.svg" alt="Links" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/numList.svg" alt="Number List" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/pointList.svg" alt="Point List" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/heading.svg" alt="Heading" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/quote.svg" alt="Quote" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/code.svg" alt="Code" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/codeBlock.svg" alt="Code Block" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/embed.svg" alt="Embed" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/img.svg" alt="Image" />
          </button>
          <button className="btn-styles">
            <img src="/img/svgs/others.svg" alt="Others" />
          </button>
        </div>
        
        {/* Tercer div: form-floating */}
        <div className="form-floating bg-white p-4 rounded-md">
          <textarea
            className="parrafo-form py-4 w-full mx-4 resize-y text-gray-400"
            placeholder="Write your post content here..."
            name="text"
            id="idParrafo"
          ></textarea>
          <div className="flex justify-between items-center mt-2 mx-4 gap-3">
            <input
              className="input-tags w-3/12"
              type="text"
              placeholder="Avatar-photo"
              name="avatar"
            />
            <input
              className="input-tags w-3/12"
              type="text"
              placeholder="Author"
              name="name"
            />
            <div className="w-5/12 flex justify-end">
              <label className="me-2">Fecha:</label>
              <input className="m-0" type="date" name="date" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormularioPost;


