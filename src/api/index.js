import axios from 'axios';


export default async function makeLogin(email, password) {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_API_URL}/login`,
      method: 'POST',
      data: {
        email,
        password
      }
    });

    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}

export async function createUser(email, password) {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_API_URL}/signup`,
      method: 'POST',
      data: {
        email,
        password
      }
    });

    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response)
      return { status: err.response.status, data: err.response.data };

    if (err.request) return { status: 404, data: err.request };

    return { status: 500, data: err };
  }
}