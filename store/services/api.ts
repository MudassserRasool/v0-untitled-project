import ENVIRONMENTS from '@/utils/constants/environment';
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosInstance from './axiosInstance';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }: axiosQuery) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: ENVIRONMENTS.BACKEND_API_URL,
  }),
  tagTypes: ['User', 'Post', 'Auth'],
  endpoints: () => ({}),
});
