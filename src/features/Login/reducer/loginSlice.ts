import { createSlice } from '@reduxjs/toolkit';
import { login } from '../API/login';

export interface LoginState {
	loading: boolean;
	error: string | null | undefined;
	success: boolean;
	user: any;
	token: string | null;
}

const initialState: LoginState = {
	loading: false,
	error: null,
	success: false,
	user: {},
	token: null,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.success = true;
			state.user = payload.user;
			state.token = payload.token;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload?.error;
		});
	},
});

export default loginSlice.reducer;
