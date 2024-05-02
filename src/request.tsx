import axios from 'axios';

const createAxios = (url: string) => {
  const axiosInstance = axios.create({
    baseURL: `https://662afd75de35f91de156f1f2.mockapi.io/api/v1/${url}`,
    timeout: 5000,
    withCredentials: false,
    headers: {
      accept: '*/*',
      'Access-Control-Allow--Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
    validateStatus(status) {
      return status >= 200 && status < 501;
    },
  });
  return axiosInstance;
};

const books = createAxios('books');

const ApiStore = {
  books,
};

export default ApiStore;
