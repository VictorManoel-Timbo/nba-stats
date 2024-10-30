import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";

function apiConfig(): AxiosRequestConfig {
  return {
    baseURL: "https://api.balldontlie.io/v1",
    headers: {
      Authorization: "f55137da-ad8f-4a96-8299-059c783ce308"
    }
  };
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      alert(error);
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api() {
  return initAxios(apiConfig());
}

export default api;