import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LanguageType } from '../types/language';

export const languagesApi = createApi({
	reducerPath: 'languagesApi',
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
		}),
	}),
});

export const { useGetLanguagesQuery } = languagesApi;
