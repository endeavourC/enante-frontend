import { Modal } from '@/common/components';
import { ModalStepProvider } from '@/common/context/ModalStepContext';
import { useModalService } from '@/common/hooks/useModalService';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FooterButtons } from './components/FooterButtons';

export const AddLanguageModal: React.FC = () => {
	const { isOpen, closeModal } = useModalService();
	const { t } = useTranslation();

	const onSuccess = () => {
		console.log('success');
	};

	const steps = useMemo(
		() => [
			{
				id: 1,
				title: t('languages.addLanguageModal.heading.addingLanguage'),
				content: <div>Dodawanie języka</div>,
			},
			{
				id: 2,
				title: t('languages.addLanguageModal.heading.addingFiches'),
				content: <div>Dodawanie fiszek</div>,
			},
		],
		[t]
	);

	return (
		<Modal onClose={closeModal} isOpen={isOpen} width="720px">
			<ModalStepProvider steps={steps}>
				<Modal.Heading>
					<Modal.StepsHeadline />
				</Modal.Heading>
				<Modal.Content>
					<Modal.StepsContent />
				</Modal.Content>
				<Modal.Footer>
					<FooterButtons onSuccess={onSuccess} onCloseModal={closeModal} />
				</Modal.Footer>
			</ModalStepProvider>
		</Modal>
	);
};
