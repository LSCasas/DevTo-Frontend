const API_URL = 'https://back-project-lbqr.onrender.com';

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