import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/common/components';
import { ModalStepProvider } from '@/common/context/ModalStepContext';
import { useModalService } from '@/common/hooks/useModalService';
import { AddingLanguage } from './components/steps/AddingLanguage';
import { AddLanguageModalBody } from './components/AddLanguageModalBody';

const SecondComponent = () => {
	return <div>Dodawanie fiszki</div>;
};

export const AddLanguageModal: React.FC = () => {
	const { isOpen, closeModal } = useModalService();
	const { t } = useTranslation();

	const steps = useMemo(
		() => [
			{
				id: 1,
				title: t('languages.addLanguageModal.heading.addingLanguage'),
				content: <AddingLanguage />,
			},
			{
				id: 2,
				title: t('languages.addLanguageModal.heading.addingFiches'),
				content: <SecondComponent />,
			},
		],
		[t]
	);

	return (
		<Modal onClose={closeModal} isOpen={isOpen} width="720px">
			<ModalStepProvider steps={steps}>
				<AddLanguageModalBody closeModal={closeModal} />
			</ModalStepProvider>
		</Modal>
	);
};
