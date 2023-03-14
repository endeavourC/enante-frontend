import { DataDefaultState } from '@/common/types/DataDefaultState';
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../API/login';

export interface LoginState extends DataDefaultState {
	token: string | null;
}

const initialState: LoginState = {
	loading: false,
	error: null,
	success: false,
	token: localStorage.getItem('AUTH_TOKEN') || null,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.success = true;
			state.token = payload.token;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload?.error;
		});
	},
});

export const { reset } = loginSlice.actions;

export default loginSlice.reducer;
