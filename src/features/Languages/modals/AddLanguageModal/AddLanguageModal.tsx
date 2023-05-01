import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/common/components';
import { ModalStepProvider } from '@/common/context/ModalStepContext';
import { useModalService } from '@/common/hooks/useModalService';
import { AddingLanguage } from './components/steps/AddingLanguage';
import { AddLanguageModalBody } from './components/AddLanguageModalBody';
import { AddingFiches } from './components/steps/AddingFiches';
import { languageTrigger } from './triggers/languageTrigger';
import { useForm } from 'react-hook-form';
import { FormData, schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

export const AddLanguageModal: React.FC = () => {
	const { isOpen, closeModal } = useModalService();
	const { t } = useTranslation();

	const methods = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const steps = useMemo(
		() => [
			{
				id: 1,
				title: t('languages.addLanguageModal.heading.addingLanguage'),
				content: <AddingLanguage />,
				validationTriggers: [languageTrigger],
			},
			{
				id: 2,
				title: t('languages.addLanguageModal.heading.addingFiches'),
				content: <AddingFiches />,
			},
		],
		[t]
	);

	return (
		<Modal onClose={closeModal} isOpen={isOpen} width="720px">
			<ModalStepProvider methods={methods} steps={steps}>
				<AddLanguageModalBody methods={methods} closeModal={closeModal} />
			</ModalStepProvider>
		</Modal>
	);
};
