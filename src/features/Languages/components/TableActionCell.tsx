import { DropdownMenu } from '@/common/components/DropdownMenu';
import { DropdownMenuItem } from '@/common/components/DropdownMenu/components/DropdownMenuItem';
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

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuItem onClick={handleEdit}>
					<MdEdit className="mr-2 dark:fill-white" />
					Edit
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleDelete}>
					<MdDelete className="mr-2  dark:fill-white" />
					Remove
				</DropdownMenuItem>
			</DropdownMenu>
		</div>
	);
};
