import { FooterButtons } from '../components/FooterButtons';
import { Modal } from '@/common/components';
import { FormProvider } from 'react-hook-form';
import { useAddLanguageMutation } from '@/features/Languages/API/languages';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { useModalSteps } from '@/common/hooks/useModalSteps';
interface Props {
	closeModal: () => void;
	methods: any;
}

export const AddLanguageModalBody: React.FC<Props> = ({
	methods,
	closeModal,
}) => {
	const { t } = useTranslation();
	const { setNextStep, setStep, setPrevStep } = useModalSteps();

	const [addLanguage, { isLoading }] = useAddLanguageMutation();

	const onSuccess = methods.handleSubmit((data: FormData) => {
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
				<Modal.StepsHeadline onCurrentStep={setStep} />
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
					onNextStep={setNextStep}
					onPrevStep={setPrevStep}
					onSuccess={onSuccess}
					onCloseModal={closeModal}
				/>
			</Modal.Footer>
		</FormProvider>
	);
};
