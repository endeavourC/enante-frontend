import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LanguageType } from '../types/language';

export const languagesApi = createApi({
	reducerPath: 'languagesApi',
	tagTypes: ['Languages'],
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers, { getState }: any) => {
			const token = getState().login.token;

			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getLanguages: builder.query<LanguageType, void>({
			query: () => '/languages',
			providesTags: ['Languages'],
		}),
		addLanguage: builder.mutation({
			query: (body) => ({
				url: '/languages/add',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Languages'],
		}),
	}),
});

export const { useGetLanguagesQuery, useAddLanguageMutation } = languagesApi;
