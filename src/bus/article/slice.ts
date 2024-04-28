import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiResponse} from './types';

const baseUrl = 'https://astrodev.space/api';

export const articleApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getArticles: builder.query<ApiResponse, void>({
      query: () => '/affirmations/test',
    }),
  }),
});

export const {useGetArticlesQuery} = articleApi;
