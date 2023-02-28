import { preferencesContext } from '@/common/context/preferencesContext';
import { useContext } from 'react';

export const usePreferencesContext = () => {
	const preferences = useContext(preferencesContext);

	if (!preferences) {
		throw new Error(
			'usePreferencesContext must be used within a PreferencesProvider'
		);
	}

	return preferences;
};
