import { useModalSteps } from '@/common/hooks/useModalSteps';
import { Step } from '@/common/types/Step';
import { ModalStepHeadlineCircleBadge } from './ModalStepHeadlineCircleBadge';
import { ModalStepHeadlineText } from './ModalStepHeadlineText';

export const ModalStepsHeadline = () => {
	const { currentStep, setCurrentStep, steps } = useModalSteps();

	console.log(steps);

	const handleSetStep = (id: number) => () => {
		setCurrentStep(id);
	};

	return (
		<div className="flex items-center justify-start flex-wrap">
			{steps.map(({ id, title }: Step, index: number) => (
				<button
					className="flex items-center justify-start mr-6 text-sm"
					key={id}
					onClick={handleSetStep(id)}
				>
					<ModalStepHeadlineCircleBadge isActive={currentStep === id}>
						{index + 1}
					</ModalStepHeadlineCircleBadge>
					<ModalStepHeadlineText isActive={currentStep === id}>
						{title}
					</ModalStepHeadlineText>
				</button>
			))}
		</div>
	);
};
