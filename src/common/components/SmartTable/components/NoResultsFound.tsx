import { motion } from 'framer-motion';

interface Props {
	columnsLength: number;
}

export const NoResultsFound: React.FC<Props> = ({ columnsLength }) => {
	return (
		<motion.tr key="noResultFound" layout className="bg-white">
			<td className="p-4 text-muted" colSpan={columnsLength}>
				No results found...
			</td>
		</motion.tr>
	);
};
