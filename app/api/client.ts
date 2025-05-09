import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});
export const sendRequest = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data: any = {}, isFormData: boolean = false) => {
  try {
    const headers = isFormData
      ? {
          'Content-Type': 'multipart/form-data',
        }
      : {
          'Content-Type': 'application/json',
        };

    const response = await apiClient({
      url,
      method,
      headers,
      data: isFormData ? data : JSON.stringify(data), // If form data, pass it as-is, else stringify for JSON
    });

    return response.data; // return the response data
  } catch (error) {
    console.error('API request error:', error);
    throw error; // propagate the error for handling in components
  }
};
