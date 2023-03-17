import { useAppSelector } from './useAppSelector';

type ReturnType = {
	isLogged: boolean;
};

export const useCurrentUser = (): ReturnType => {
	const auth = useAppSelector((state) => state.login.token);

	return {
		isLogged: !!auth,
	};
};
