const API_URL = 'https://back-project-lbqr.onrender.com';


export async function getPostByID(id) {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: 'GET',
  });
  const json = await response.json();
  return json; // Retorna el post específico por ID
}