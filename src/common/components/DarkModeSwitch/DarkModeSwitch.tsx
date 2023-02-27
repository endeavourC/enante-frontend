import { DarkModeService } from '@/services/DarkModeService';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as DarkModeIcon } from '@/assets/dark-mode-6682.svg';
import { ReactComponent as LightModeIcon } from '@/assets/sun-3337.svg';

export const DarkModeSwitch = () => {
	const [darkMode, setDarkMode] = useState(DarkModeService.isDarkMode);

	useEffect(() => {
		DarkModeService.toggleDarkMode();
	}, [darkMode]);

	const onClick = () => {
		setDarkMode(!darkMode);
	};

	const classes = classNames({
		'absolute right-4 top-4': true,
	});

	return (
		<button className={classes} onClick={onClick}>
			{darkMode ? <DarkModeIcon /> : <LightModeIcon />}
		</button>
	);
};
