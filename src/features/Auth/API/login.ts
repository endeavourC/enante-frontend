import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface LoginPayload {
	email: string;
	password: string;
}

type LoginResults = {
	type: string;
	token: string;
	expires_at: Date;
};

type LoginError = {
	error: string;
};

export const login = createAsyncThunk<
	LoginResults,
	LoginPayload,
	{
		rejectValue: LoginError;
	}
>('login', async ({ email, password }, thunkAPI) => {
	try {
		const { data } = await axios.post(`/auth/login`, {
			email,
			password,
		});

		localStorage.setItem('AUTH_TOKEN', data.token);

		return data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			error: error.response.data.error,
		});
	}
});
