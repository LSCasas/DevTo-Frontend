import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { create } from '../api/posts';
import { getUsers } from '../api/users';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';

const FormularioPost = () => {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors }, setError } = useForm();
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    const newTags = value.split(/[, ]+/); // Split by commas or spaces
    setTags(newTags);
  };

  const onSubmit = async (formData) => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (!token) {
      toast.error('Debes estar loggeado');
      return;
    }

    try {
      const users = await getUsers(token);
      const userId = users.find((user) => user.email === email);

      if (!userId) {
        toast.error('Usuario no encontrado');
        return;
      }

      await create(formData.title, formData.img, formData.text, userId._id, tags, token);
      toast.success('Post creado exitosamente');
      router.push('/main');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al crear el post. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <form id="form-data" onSubmit={handleSubmit(onSubmit)} className="m-0 bg-transparent text-black max-w-4xl mx-auto ml-2">
      <div className="flex flex-col gap-4 p-4 bg-transparent">
        {/* Primer div: card-form-top */}
        <div className="card-form-top bg-white p-4 rounded-md">
          <input
            className="input-tags my-4 w-3/12"
            type="text"
            placeholder="Photo"
            {...register('img', { required: true })}
          />
          <input
            className="title-form w-full text-5xl text-gray-800"
            type="text"
            placeholder="New post title here..."
            {...register('title', { required: true })}
          />
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
            {...register('text', { required: true })}
          ></textarea>
          <div className="flex justify-between items-center mt-2 mx-4 gap-3">
            <div className="w-5/12 flex justify-start">
              <label className="me-2">Fecha:</label>
              <input className="m-0" type="date" {...register('date')} />
            </div>
          </div>
        </div>

        {/* Botón de submit */}
        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioPost;




