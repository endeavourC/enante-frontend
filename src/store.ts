import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import loginReducer from '@/features/Login/reducer/loginSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
