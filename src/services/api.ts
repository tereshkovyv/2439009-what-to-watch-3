import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {ErrorData} from '../types.ts';
import {store} from '../store';
import {setError} from '../store/action.ts';

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
    (error: AxiosError) => {
      if (error.response) {
        const errorData = error.response.data['details'][0];
        const detailMessage : ErrorData = {
          property : errorData['property'],
          messages : errorData['messages']
        };
        store.dispatch(setError(detailMessage));
      }

      throw error;
    }
  );


  return api;
};
