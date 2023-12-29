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

  type Error = {
      details : ErrorData[];
  }

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<Error>) => {
      if (error.response) {
        const errorObject : Error = (error.response.data);
        const detailMessage : ErrorData = errorObject.details[0];
        store.dispatch(setError(detailMessage));
      }
      throw error;
    }
  );


  return api;
};
