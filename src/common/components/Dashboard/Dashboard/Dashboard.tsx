import { MenuItem } from '@/common/types/MenuItem';
import { logout } from '@/features/Auth/reducer/loginSlice';
import { useAppDispatch } from '@/store';
import { MdLanguage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { SideHeader } from '../SideHeader';
import { Layout } from '../../Layout';

interface Props {
	children: React.ReactNode;
}

export const Dashboard: React.FC<Props> = ({ children }) => {
	const dispatch = useAppDispatch();

	const onLogout = () => {
		dispatch(logout());
	};

	const menuItems: MenuItem[] = [
		{
			name: 'Languages',
			icon: <MdLanguage />,
			path: '/panel/languages',
		},
		{
			name: 'Logout',
			callback: onLogout,
			icon: <FiLogOut />,
		},
	];

	return (
		<Layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="grid grid-cols-[300px_1fr] bg-gray-100 gap-4">
				<SideHeader items={menuItems} />
				{children}
			</div>
		</Layout>
	);
};
