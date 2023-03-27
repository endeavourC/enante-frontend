import { MenuItem as MenuItemType } from '@/common/types/MenuItem';
import { useLocation } from 'react-router-dom';
import { MenuItem } from './components/MenuItem';

interface Props {
	items: MenuItemType[];
}

export const SideHeader: React.FC<Props> = ({ items }) => {
	const location = useLocation();

	return (
		<div className="min-h-screen flex flex-row ">
			<div className="flex flex-col w-full bg-white  overflow-hidden">
				<div className="flex items-center justify-center flex-col h-20 border-b-[1px] border-gray-100 ">
					<h1 className="text-3xl uppercase text-primary">Enante</h1>
					<p className="text-[12px] text-muted">Make your life better</p>
				</div>
				<ul className="flex flex-col py-4">
					{items.map(({ name, callback, icon, path }: MenuItemType) => (
						<MenuItem
							active={location.pathname === path}
							key={name}
							name={name}
							callback={callback}
							icon={icon}
							path={path}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
