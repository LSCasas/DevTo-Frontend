// api/posts.js
const API_URL = 'https://back-project-lbqr.onrender.com';

export async function getPosts() {
  const response = await fetch(`${API_URL}/post`, {
    method: 'GET',
  });
  const json = await response.json();
  return json; // Retorna directamente el arreglo de posts
}

export async function createPost(title, image, body, user, token) {
  const response = await fetch(`${API_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      image,
      body,
      user,
    }),
  });
  const json = await response.json();
  return json; // Retorna la respuesta del servidor
}



