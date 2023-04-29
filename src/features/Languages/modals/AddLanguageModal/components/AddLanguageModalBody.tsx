import { yupResolver } from '@hookform/resolvers/yup';
import { FooterButtons } from '../components/FooterButtons';
import { Modal } from '@/common/components';
import { FormProvider, useForm } from 'react-hook-form';
import { FormData, schema } from '../schema';
import { useModalSteps } from '@/common/hooks/useModalSteps';
import { useAddLanguageModalSteps } from '../hooks/useAddLanguageModalSteps';
import { useAddLanguageModalFormTriggers } from '../hooks/useAddLanguageModalFormTriggers';
import { useAddLanguageMutation } from '@/features/Languages/API/languages';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

interface Props {
	closeModal: () => void;
}

export const AddLanguageModalBody: React.FC<Props> = ({ closeModal }) => {
	const methods = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	const { t } = useTranslation();
	const { setNextStep, setPrevStep, currentStep, setCurrentStep } =
		useModalSteps();

	const { stepCallbacks } = useAddLanguageModalFormTriggers(methods);

	const [addLanguage, { isLoading }] = useAddLanguageMutation();

	const { onNextStep, onPrevStep, onCurrentStep } = useAddLanguageModalSteps({
		setNextStep,
		setPrevStep,
		currentStep,
		setCurrentStep,
		methods,
		stepCallbacks,
	});

	const onSuccess = methods.handleSubmit((data) => {
		addLanguage(data).then(({ data }: any) => {
			if (data.status === 'success') {
				closeModal();
				toast.success(t('languages.addLanguageModal.success'));
			}
		});
	});

	return (
		<FormProvider {...methods}>
			<Modal.Heading>
				<Modal.StepsHeadline onCurrentStep={onCurrentStep} />
			</Modal.Heading>
			<Modal.Content>
				<form onSubmit={onSuccess}>
					<Modal.StepsContent />
				</form>
			</Modal.Content>
			<Modal.Footer>
				<FooterButtons
					isLoading={isLoading}
					errors={methods.formState.errors}
					onNextStep={onNextStep}
					onPrevStep={onPrevStep}
					onSuccess={onSuccess}
					onCloseModal={closeModal}
				/>
			</Modal.Footer>
		</FormProvider>
	);
};
