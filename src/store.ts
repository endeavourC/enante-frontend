import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import loginReducer from '@/features/Auth/reducer/loginSlice';
import registerReducer from '@/features/Auth/reducer/registerSlice';
import { authListenerMiddleware } from './features/Auth/middlewares/authMiddlewareListener';
import { languagesApi } from './features/Languages/API/languages';
import { setupListeners } from '@reduxjs/toolkit/query';

const reducers = {
	login: loginReducer,
	register: registerReducer,
	[languagesApi.reducerPath]: languagesApi.reducer,
};

const rootReducer = combineReducers(reducers);

const resettableRootReducer = (
	state: ReturnType<typeof rootReducer> | undefined,
	action: AnyAction
) => {
	if (action.type === 'store/reset') {
		state = undefined;
	}

	return rootReducer(state, action);
};

export const store = configureStore({
	reducer: resettableRootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.prepend(authListenerMiddleware.middleware)
			.concat(languagesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);
