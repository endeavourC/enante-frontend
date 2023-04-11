import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
	columnsLength: number;
}

export const NoResultsFound: React.FC<Props> = ({ columnsLength }) => {
	const { t } = useTranslation();

	return (
		<motion.tr key="noResultFound" layout className="bg-white">
			<td className="p-4 text-muted" colSpan={columnsLength}>
				{t('table.noResultsFound')}
			</td>
		</motion.tr>
	);
};
