import { DataDefaultState } from '@/common/types/DataDefaultState';
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../API/login';
import { AUTH_KEYS } from '../enums/authKeys';

export interface LoginState extends DataDefaultState {
	token: string | null;
	expires_at: Date | string | null;
}

const initialState: LoginState = {
	loading: false,
	error: null,
	success: false,
	token: localStorage.getItem(AUTH_KEYS.AUTH_TOKEN) || null,
	expires_at: localStorage.getItem(AUTH_KEYS.AUTH_TOKEN_EXPIRES_AT) || null,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		reset: (state) => {
			state.loading = false;
			state.error = null;
			state.success = false;
		},
		logout: (state) => {
			state.token = null;
			state.expires_at = null;
		},
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
			state.expires_at = payload.expires_at;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload?.error;
		});
	},
});

export const { reset, logout } = loginSlice.actions;

export default loginSlice.reducer;
