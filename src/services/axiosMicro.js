import axios from 'axios';

import config from './serverMicro';

const axiosMicro = axios.create({
  baseURL: config.API_URL,
  timeout: config.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosMicro.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem('accessToken');
    config.headers = {
      Accept: 'application/json',
      Authorization: access_token,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosMicro.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error?.response?.status === 403 && !originalRequest['_retry']) {
        originalRequest['_retry'] = true;
        const refresh_token = localStorage.getItem('refresh_token');
        axios.defaults.headers.common['Authorization'] = refresh_token;
        return axiosMicro(originalRequest);
      }
      if (error?.response?.status === 401) {
        localStorage.removeItem('accessToken');
      }

      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export default axiosMicro;
