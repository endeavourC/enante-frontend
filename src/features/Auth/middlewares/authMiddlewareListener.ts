import { createListenerMiddleware } from '@reduxjs/toolkit';
import { AUTH_KEYS } from '../enums/authKeys';
import { logout } from '../reducer/loginSlice';

export const authListenerMiddleware = createListenerMiddleware();

authListenerMiddleware.startListening({
	actionCreator: logout,
	effect: async (action, listenerApi) => {
		window.localStorage.removeItem(AUTH_KEYS.AUTH_TOKEN);
		window.localStorage.removeItem(AUTH_KEYS.AUTH_TOKEN_EXPIRES_AT);
		listenerApi.dispatch({ type: 'store/reset' });
	},
});
