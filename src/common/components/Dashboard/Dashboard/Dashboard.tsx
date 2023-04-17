import { MenuItem } from '@/common/types/MenuItem';
import { logout } from '@/features/Auth/reducer/loginSlice';
import { useAppDispatch } from '@/store';
import { MdHome, MdLanguage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useMemo, useCallback } from 'react';
import { SideHeader } from '../SideHeader';
import { Layout } from '../../Layout';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

const MemoizedSideHeader = React.memo(SideHeader);

export const Dashboard: React.FC<Props> = ({ children }) => {
	const dispatch = useAppDispatch();

	const onLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	const menuItems: MenuItem[] = useMemo(
		() => [
			{
				name: 'Home',
				icon: <MdHome />,
				path: '/panel',
			},
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
		],
		[onLogout]
	);

	return (
		<Layout>
			<div className="grid grid-cols-[300px_1fr] bg-gray-100 gap-4 ">
				<MemoizedSideHeader items={menuItems} />
				{children}
			</div>
		</Layout>
	);
};
