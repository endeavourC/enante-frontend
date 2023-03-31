import { useMemo } from 'react';
import { DropdownMenu } from '@/common/components/DropdownMenu/';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Row } from 'react-table';

interface Props {
	row: Row;
}

export const TableActionCell: React.FC<Props> = ({ row }) => {
	const languageId = row.values.id;

	const handleDelete = () => {
		console.log('delete');
	};

	const handleEdit = () => {
		console.log('edit');
	};

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
		[]
	);

	return (
		<div>
			<DropdownMenu items={items} />
		</div>
	);
};
