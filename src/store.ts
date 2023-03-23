import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import loginReducer from '@/features/Auth/reducer/loginSlice';
import registerReducer from '@/features/Auth/reducer/registerSlice';
import { authListenerMiddleware } from './features/Auth/middlewares/authMiddlewareListener';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		register: registerReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(authListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
