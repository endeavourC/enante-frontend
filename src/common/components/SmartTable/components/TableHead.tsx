import { HeaderGroup } from 'react-table';
import { motion } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface Props {
	headerGroup: HeaderGroup;
}

export const TableHead: React.FC<Props> = ({ headerGroup }) => {
	return (
		<tr {...headerGroup.getHeaderGroupProps()}>
			{headerGroup.headers.map((column) => (
				<motion.th
					{...column.getHeaderProps({
						...column.getSortByToggleProps(),
						style: {
							width: column.width,
						},
					})}
					scope="col"
					className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase"
				>
					{column.render('Header')}
					<span className="inline-block ml-2 align-middle">
						{column.isSorted ? (
							column.isSortedDesc ? (
								<BsChevronDown />
							) : (
								<BsChevronUp />
							)
						) : null}
					</span>
				</motion.th>
			))}
		</tr>
	);
};
