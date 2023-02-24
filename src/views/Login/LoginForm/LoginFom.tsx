import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { LoginFormBody } from './LoginFormBody';

export const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const onSubmit: SubmitHandler<FieldValues> = () => {
		if (isLoading) return;
		console.log('submit');

		setIsLoading(true);
	};

	return <LoginFormBody isLoading={isLoading} onSubmit={onSubmit} />;
};
