import { createListenerMiddleware } from '@reduxjs/toolkit';
import { AUTH_KEYS } from '../enums/authKeys';
import { logout } from '../reducer/loginSlice';
import axios from '@/config/axios';
import { login } from '../API/login';

export const authListenerMiddleware = createListenerMiddleware();

authListenerMiddleware.startListening({
	actionCreator: logout,
	effect: async (action, listenerApi) => {
		window.localStorage.removeItem(AUTH_KEYS.AUTH_TOKEN);
		window.localStorage.removeItem(AUTH_KEYS.AUTH_TOKEN_EXPIRES_AT);
		axios.defaults.headers.Authorization = '';
		listenerApi.dispatch({ type: 'store/reset' });
	},
});

authListenerMiddleware.startListening({
	actionCreator: login.fulfilled,
	effect: async (action) => {
		axios.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
		console.log(axios.defaults.headers);
	},
});
