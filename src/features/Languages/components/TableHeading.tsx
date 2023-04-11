import { Button } from '@/common/components';
import { useTranslation } from 'react-i18next';

export const TableHeading = () => {
	const { t } = useTranslation();
	return (
		<div className="flex items-center justify-start">
			<h3 className="text-2xl leading-6 font-medium text-gray-900 mr-4">
				{t('languages.table.heading')}
			</h3>
			<Button>{t('languages.table.heading.button')}</Button>
		</div>
	);
};
