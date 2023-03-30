import { createContext, useRef, useState } from 'react';
import { DarkModeService } from '@/common/services/DarkModeService';
import { DarkModeValue } from '@/common/components/DarkModeSwitch/DarkModeTypes';

type preferencesContextType = {
	language: string;
	theme: string;
	toggleTheme: () => void;
	setLanguage: (language: string) => void;
};

export const preferencesContext = createContext<preferencesContextType | null>(
	null
);

interface Props {
	children: React.ReactNode;
}

export const PreferencesProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState(
		DarkModeService.isDarkMode ? DarkModeValue.Light : DarkModeValue.Dark
	);

	DarkModeService.toggleDarkMode();

	const [language, setLanguage] = useState('PL');

	const toggleTheme = () => {
		setTheme((prev) =>
			prev === DarkModeValue.Dark ? DarkModeValue.Light : DarkModeValue.Dark
		);

		DarkModeService.toggleDarkMode();
	};

	return (
		<preferencesContext.Provider
			value={{
				language,
				theme,
				toggleTheme,
				setLanguage,
			}}
		>
			{children}
		</preferencesContext.Provider>
	);
};
