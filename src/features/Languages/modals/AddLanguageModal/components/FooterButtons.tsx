import { useTranslation } from 'react-i18next';
import { Button, ButtonKind } from '@/common/components/Button/Button';
import { useModalSteps } from '@/common/hooks/useModalSteps';

interface Props {
	onSuccess: () => void;
	onCloseModal?: () => void;
}

export const FooterButtons: React.FC<Props> = ({ onSuccess }) => {
	const { t } = useTranslation();
	const { currentStep, steps, setNextStep, setPrevStep } = useModalSteps();

	return (
		<>
			{currentStep > 1 ? (
				<span className="mr-4">
					<Button kind={ButtonKind.Neutral} onClick={setPrevStep}>
						{t('common.prev')}
					</Button>
				</span>
			) : null}
			{currentStep !== steps.length ? (
				<span className="mr-4">
					<Button kind={ButtonKind.Primary} onClick={setNextStep}>
						{t('common.next')}
					</Button>
				</span>
			) : null}
			{currentStep === steps.length ? (
				<span className="mr-4">
					<Button kind={ButtonKind.Primary} onClick={onSuccess}>
						{t('languages.addLanguageModal.button.submit')}
					</Button>
				</span>
			) : null}
		</>
	);
};
