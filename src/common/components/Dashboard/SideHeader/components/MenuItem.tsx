import { Text } from '@/common/components/Text';
import { MenuItem as MenuItemProps } from '@/common/types/MenuItem';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
	active?: boolean;
};

export const MenuItem: React.FC<MenuItemProps & Props> = ({
	name,
	icon,
	path,
	callback,
	active,
}) => {
	const classes = classNames({
		'px-4 my-2 hover:translate-x-4 transition-all duration-300': true,
		'text-primary': active,
	});

	return (
		<li key={name} className={classes}>
			{callback ? (
				<button onClick={callback}>
					<Text icon={icon}>{name}</Text>
				</button>
			) : (
				<Link to={(path ||= '')}>
					<Text icon={icon}>{name}</Text>
				</Link>
			)}
		</li>
	);
};
