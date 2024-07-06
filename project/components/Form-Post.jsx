import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { getUsers, newPost } from "@/api/api"; // Asegúrate de que la ruta a tu API esté correcta

export default function CreatePost() {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors } } = useForm();

  async function onSubmit(data) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token) {
      try {
        const users = await getUsers(token); // Llama a getUsers con el token
        const user = users.find(u => u.email === email);

        if (user) {
          await newPost(data.title, data.img, data.text, user._id, token);
          router.push("/");
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    } else {
      console.error("Token not found");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-0 bg-transparent text-black max-w-4xl mx-auto ml-2">
      <div className="flex flex-col gap-4 p-4 bg-transparent">
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

        <div className="iconos-svgs p-4 flex gap-1 justify-start bg-transparent">
          {/* Componentes de botones adicionales si es necesario */}
        </div>

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

        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
}






















