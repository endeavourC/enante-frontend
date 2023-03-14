import { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export const withResetStateWhenUnmount =
	(WrappedComponent: React.FC, resetCallback: ActionCreatorWithoutPayload) =>
	() => {
		const dispatch = useAppDispatch();

		useEffect(() => {
			return () => {
				dispatch(resetCallback());
			};
		}, [dispatch]);

		return <WrappedComponent />;
	};
