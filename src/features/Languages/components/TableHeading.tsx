import { Button } from '@/common/components';
import { useModalService } from '@/common/hooks/useModalService';
import { useTranslation } from 'react-i18next';
import { AddLanguageModal } from '../modals/AddLanguageModal/AddLanguageModal';

export const TableHeading = () => {
	const { t } = useTranslation();
	const { openModal } = useModalService();

	const handleClick = () => {
		openModal(<AddLanguageModal />);
	};

	return (
		<div className="flex items-center justify-start">
			<h3 className="text-2xl leading-6 font-medium text-gray-900 mr-4">
				{t('languages.table.heading')}
			</h3>
			<Button onClick={handleClick}>
				{t('languages.table.heading.button')}
			</Button>
		</div>
	);
};
