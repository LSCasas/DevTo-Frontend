const API_URL = 'https://back-project-lbqr.onrender.com';

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const json = await res.json();
  return json.data;
}

export async function createUser(data) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function getUser(id) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json.data;
}

export async function getPost() {
  const res = await fetch(`${API_URL}/posts/search?search=`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json.data;
}

export async function createPost(data, token) {
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function getPostById(title) {
  const res = await fetch(`${API_URL}/posts/search?search=${title}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  return json.data;
}
