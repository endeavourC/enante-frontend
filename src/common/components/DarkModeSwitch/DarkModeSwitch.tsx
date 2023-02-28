import classNames from 'classnames';
import { ReactComponent as DarkModeIcon } from '@/assets/dark-mode-6682.svg';
import { ReactComponent as LightModeIcon } from '@/assets/sun-3337.svg';
import { DarkModeValue } from '@/common/types/DarkModeTypes';
import { usePreferencesContext } from '@/common/hooks/usePreferencesContext';

export const DarkModeSwitch = () => {
	const { theme, toggleTheme } = usePreferencesContext();

	const classes = classNames({
		'absolute right-4 top-4': true,
	});

	const onClick = () => {
		toggleTheme();
	};

	return (
		<button className={classes} onClick={onClick}>
			{theme === DarkModeValue.Dark ? <DarkModeIcon /> : <LightModeIcon />}
		</button>
	);
};
