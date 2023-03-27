import { motion } from 'framer-motion';
import { Row } from 'react-table';
import { animation } from '../animation';

interface Props {
	row: Row;
}

export const TableRow: React.FC<Props> = ({ row }) => {
	return (
		<motion.tr
			{...row.getRowProps()}
			{...animation}
			layout
			className="bg-white"
		>
			{row.cells.map((cell) => {
				return (
					<td
						{...cell.getCellProps({
							style: {
								width: cell.column.width,
							},
						})}
						className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
					>
						{cell.render('Cell')}
					</td>
				);
			})}
		</motion.tr>
	);
};
