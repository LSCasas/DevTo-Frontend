const API_URL = 'https://back-project-lbqr.onrender.com';

export async function getPosts(id) {
    const token = localStorage.getItem("token")
    const res = await fetch(`${API_URL}/post/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
    }

    const json = await res.json().catch(() => {
        throw new Error("Failed to parse response as JSON");
    });

    return json;
}

  