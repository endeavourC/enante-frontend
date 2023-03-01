import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface LoginPayload {
	email: string;
	password: string;
}

type LoginResult = {
	user: any;
	token: string;
};

type LoginError = {
	error: string;
};

export const login = createAsyncThunk<
	LoginResult,
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
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue({
			error: error.response.data.error,
		});
	}
});
