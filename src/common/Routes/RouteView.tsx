import React from 'react';
import { useCurrentUser } from '@/common/hooks/useCurrentUser';
import { Navigate } from 'react-router-dom';

interface Props {
	guestOnly?: boolean;
	component: React.ReactNode;
}

export const RouteView: React.FC<Props> = ({
	guestOnly = false,
	component,
}) => {
	const { isLogged } = useCurrentUser();

	if (isLogged && guestOnly) {
		return <Navigate to="/panel" />;
	}

	if (!isLogged && !guestOnly) {
		return <Navigate to="/login" />;
	}

	return <React.Suspense>{component}</React.Suspense>;
};
