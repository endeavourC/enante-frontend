import { useSelector } from 'react-redux';
import { LoginFormBody } from './LoginFormBody';
import { RootState, useAppDispatch } from '@/store';
import { login, LoginPayload } from '@/features/Login/API/login';

export const LoginForm = () => {
	const { loading, error } = useSelector((state: RootState) => state.login);
	const dispatch = useAppDispatch();

	const onSubmit = (data: LoginPayload) => {
		dispatch(login(data));
	};

	return <LoginFormBody loading={loading} error={error} onSubmit={onSubmit} />;
};
