import { useMemo, useCallback } from 'react';
import { DropdownMenu } from '@/common/components';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Row } from 'react-table';
import { useModal } from '@/common/hooks/useModal';
import { RemoveLanguageModal } from '../modals/RemoveLanguageModal';
import { LanguageType } from '../types/language';

interface Props {
	row: Row;
}

export const TableActionCell: React.FC<Props> = ({ row }) => {
	const language = row.values as LanguageType;
	const { openModal } = useModal();

	const handleDelete = useCallback(() => {
		openModal(<RemoveLanguageModal language={language} />);
	}, [openModal, language]);

	const handleEdit = useCallback(() => {}, []);

	const items = useMemo(
		() => [
			{
				name: 'Edit',
				icon: <MdEdit />,
				callback: handleEdit,
			},
			{
				name: 'Delete',
				icon: <MdDelete />,
				callback: handleDelete,
			},
		],
		[handleDelete, handleEdit]
	);

	return (
		<div>
			<DropdownMenu items={items} />
		</div>
	);
};
