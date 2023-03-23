import React from 'react';
import { useCurrentUser } from '@/common/hooks/useCurrentUser';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { logout } from '@/features/Auth/reducer/loginSlice';

interface Props {
	guestOnly?: boolean;
	component: React.ReactNode;
}

export const RouteView: React.FC<Props> = ({
	guestOnly = false,
	component,
}) => {
	const { isLogged, expires_at } = useCurrentUser();
	const dispatch = useAppDispatch();

	if (isLogged && expires_at && new Date(expires_at) < new Date()) {
		dispatch(logout());
	}

	if (isLogged && guestOnly) {
		return <Navigate to="/panel" />;
	}

	if (!isLogged && !guestOnly) {
		return <Navigate to="/login" />;
	}

	return <React.Suspense>{component}</React.Suspense>;
};
