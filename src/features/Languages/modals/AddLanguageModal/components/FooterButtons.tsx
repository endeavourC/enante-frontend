import { useTranslation } from 'react-i18next';
import { Button, ButtonKind } from '@/common/components/Button/Button';
import { useModalSteps } from '@/common/hooks/useModalSteps';

interface Props {
	isLoading: boolean;
	onSuccess: () => void;
	onCloseModal?: () => void;
	onNextStep: () => void;
	onPrevStep: () => void;
	errors: any;
}

export const FooterButtons: React.FC<Props> = ({
	isLoading,
	onSuccess,
	onNextStep,
	onPrevStep,
}) => {
	const { t } = useTranslation();
	const { currentStep, steps } = useModalSteps();

	return (
		<>
			{currentStep > 1 ? (
				<span className="mr-4">
					<Button kind={ButtonKind.Neutral} onClick={onPrevStep}>
						{t('common.prev')}
					</Button>
				</span>
			) : null}
			{currentStep !== steps.length ? (
				<span className="mr-4">
					<Button kind={ButtonKind.Primary} onClick={onNextStep}>
						{t('common.next')}
					</Button>
				</span>
			) : null}
			{currentStep === steps.length ? (
				<span className="mr-4">
					<Button
						isLoading={isLoading}
						kind={ButtonKind.Primary}
						onClick={onSuccess}
					>
						{t('languages.addLanguageModal.button.submit')}
					</Button>
				</span>
			) : null}
		</>
	);
};
