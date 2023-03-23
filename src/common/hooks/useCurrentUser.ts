import { useAppSelector } from './useAppSelector';

type ReturnType = {
	isLogged: boolean;
	expires_at: string | null | Date;
};

export const useCurrentUser = (): ReturnType => {
	const auth = useAppSelector((state) => state.login.token);
	const expires_at = useAppSelector((state) => state.login.expires_at);

	return {
		isLogged: !!auth,
		expires_at,
	};
};
