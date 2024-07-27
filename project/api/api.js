const API_URL = 'https://back-project-lbqr.onrender.com';

// REGISTER
//CREATE USER 
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

// LOGIN 
export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error in login request:', error);
    throw new Error('Error in login request. Please try again later.');
  }
}

//CREATE POST
// GET POSTS
export async function getPosts() {
  const res = await fetch(`${API_URL}/post`, {
    method: "GET",
  });

  const json = await res.json();
  return json.data.posts;
}


// NEW POST
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



// GET USERS BY ID 
export async function getUserByID(id) {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "GET",
  });

  const json = await response.json();
  return json;
}



// GET USERS BY ID 
export async function getPostByID(id) {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "GET",
  });

  const json = await response.json();
  return json;
}


// GET USERS
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

