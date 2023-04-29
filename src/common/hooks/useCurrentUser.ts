import { useAppSelector } from './useAppSelector';

type ReturnType = {
	token: string | null;
	isLogged: boolean;
	expires_at: string | null | Date;
};

export const useCurrentUser = (): ReturnType => {
	const auth = useAppSelector((state) => state.login.token);
	const expires_at = useAppSelector((state) => state.login.expires_at);

	return {
		token: auth,
		isLogged: !!auth,
		expires_at,
	};
};
