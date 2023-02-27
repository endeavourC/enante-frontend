import React from 'react';

interface Props {
	children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => (
	<div className="container mx-auto w-full px-4 md:px-0">{children}</div>
);
