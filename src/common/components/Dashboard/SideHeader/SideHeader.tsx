import { Text } from '@/common/components/Text';
import { MenuItem } from '@/common/types/MenuItem';
import { Link } from 'react-router-dom';

interface Props {
	items: MenuItem[];
}

export const SideHeader: React.FC<Props> = ({ items }) => {
	return (
		<div className="min-h-screen flex flex-row ">
			<div className="flex flex-col w-full bg-white  overflow-hidden">
				<div className="flex items-center justify-center flex-col h-20 border-b-[1px] border-gray-100 ">
					<h1 className="text-3xl uppercase text-primary">Enante</h1>
					<p className="text-[12px] text-muted">Make your life better</p>
				</div>
				<ul className="flex flex-col py-4">
					{items.map(({ name, callback, icon, path }: MenuItem) => (
						<li
							key={name}
							className="px-4 my-2 hover:translate-x-4 transition-all"
						>
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
					))}
				</ul>
			</div>
		</div>
	);
};
