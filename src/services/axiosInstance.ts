'use client';

import axios from 'axios';
import * as apis from './apis';

const axiosInstance = axios.create({
  baseURL: apis.BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

interface RequestParams {
  method:
    | typeof apis.API_METHODS.GET
    | typeof apis.API_METHODS.POST
    | typeof apis.API_METHODS.PUT
    | typeof apis.API_METHODS.DELETE;
  url: string;

  data?: any;
}

const request = async ({ method, url, data }: RequestParams): Promise<any> => {
  try {
    const isFormData = data instanceof FormData; // Check if data is FormData
    const config: any = {
      method,
      url,
      data,
      headers: {
        ...axiosInstance.defaults.headers,
        // Authorization: `Bearer ${accessToken}`,
        ...(isFormData && { 'Content-Type': 'multipart/form-data' }), // Override Content-Type for FormData
      },
    };

    console.log(
      `Making ${method} request to ${url} with headers:`,
      config.headers,
    ); // Debugging headers

    const response = axiosInstance(config);
    return response;
  } catch (error: any) {
    console.error('Request failed:', error);
    throw error; // Re-throw error for further handling
  }
};

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Don't set Content-Type for FormData

    console.log('Request Config:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
    });

    return config;
  },
  (error) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Received:', {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  async (error) => {
    console.error('Axios Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    const originalRequest = error.config;

    // Handle 401 (Unauthorized) errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // try {
      //   // Attempt to refresh token (cookie will be automatically sent)
      //   await axiosInstance.post("/auth/refreshToken");

      //   // Retry the original request
      //   return axiosInstance(originalRequest);
      // } catch (refreshError) {
      //   console.error("Token refresh failed:", refreshError);
      //   window.location.href = "/login";
      //   return Promise.reject(refreshError);
      // }

      window.location.href = '/auth/sign-in';
    }

    return Promise.reject(error);
  },
);

export default request;
