import React from 'react';

interface Props {
	guestOnly?: boolean;
	component: React.ReactNode;
}

export const RouteView: React.FC<Props> = ({
	guestOnly = false,
	component,
}) => {
	if (guestOnly) {
	} else {
		console.log('Only logged in users!');
	}

	return <React.Suspense>{component}</React.Suspense>;
};
