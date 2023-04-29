import { yupResolver } from '@hookform/resolvers/yup';
import { FooterButtons } from '../components/FooterButtons';
import { Modal } from '@/common/components';
import { FormProvider, useForm } from 'react-hook-form';
import { FormData, schema } from '../schema';
import { useModalSteps } from '@/common/hooks/useModalSteps';
import { useAddLanguageModalSteps } from '../hooks/useAddLanguageModalSteps';
import { useAddLanguageModalFormTriggers } from '../hooks/useAddLanguageModalFormTriggers';
import { useAddLanguageMutation } from '@/features/Languages/API/languages';

interface Props {
	closeModal: () => void;
}

export const AddLanguageModalBody: React.FC<Props> = ({ closeModal }) => {
	const methods = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	const { setNextStep, setPrevStep, currentStep, setCurrentStep } =
		useModalSteps();

	const { stepCallbacks } = useAddLanguageModalFormTriggers(methods);

	const [addLanguage] = useAddLanguageMutation();

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
			if (data.id) {
				closeModal();
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
