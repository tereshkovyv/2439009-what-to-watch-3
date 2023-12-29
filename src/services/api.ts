import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {AppError} from '../types.ts';
import {store} from '../store';
import {setError} from '../store/reducers/error/error-slice.ts';

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;
export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AppError>) => {
      if (error.response) {
        const errorObject : AppError = (error.response.data);
        store.dispatch(setError(errorObject));
      }
      throw error;
    }
  );

  return api;
};
