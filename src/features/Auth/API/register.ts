import axios from '@/config/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './login';

export interface RegisterPayload {
	email: string;
	password: string;
}

type RegisterResults = {
	email: string;
	created_at: Date;
	updated_at: Date;
	id: number;
};

type RegisterError = {
	error: any;
};

export const register = createAsyncThunk<
	RegisterResults,
	RegisterPayload,
	{
		rejectValue: RegisterError;
	}
>('register', async ({ email, password }, thunkAPI) => {
	try {
		const { data } = await axios.post(`/auth/register`, {
			email,
			password,
		});

		thunkAPI.dispatch(login({ email, password }));

		return data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue({
			error: error.response.data.error,
		});
	}
});
