const API_URL = 'https://back-project-lbqr.onrender.com';

export async function registerUser({ profilePic, name, userName, email, password }) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profilePic,
      name,
      userName,
      email,
      password,
    })
  });

  if (!res.ok) {
    throw new Error('Error al registrar el usuario');
  }

  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const json = await res.json();
  return json.data.token;
}

export async function getPosts() {
  const res = await fetch(`${API_URL}/post`, {
    method: "GET",
  });

  const json = await res.json();
  return json.data.posts;
}

export async function newPost(title, image, body, user, token) {
  const response = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title,
      image,
      body,
      user,
    }),
  });

  const json = await response.json();
  return json;
}

export async function getPostByID(id) {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "GET",
  });

  const json = await response.json();
  return json;
}

export async function getUserByID(id) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "GET",
  });

  const json = await response.json();
  return json;
}

export async function getUsers(token) {
  const res = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await res.json();
  return json.data.users;
}

