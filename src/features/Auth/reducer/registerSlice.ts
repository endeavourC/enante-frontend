import { register } from './../API/register';
import { DataDefaultState } from '@/common/types/DataDefaultState';
import { createSlice } from '@reduxjs/toolkit';

export interface RegisterState extends DataDefaultState {}

const initialState: RegisterState = {
	loading: false,
	error: null,
	success: false,
};

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(register.fulfilled, (state) => {
			state.loading = false;
			state.success = true;
		});
		builder.addCase(register.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload?.error;
		});
	},
});

export default registerSlice.reducer;
