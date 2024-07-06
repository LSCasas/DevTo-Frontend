const API_URL = 'https://back-project-lbqr.onrender.com';
export async function createPost(data, token) {
    try {
      const response = await fetch(`${API_URL}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
  
  

