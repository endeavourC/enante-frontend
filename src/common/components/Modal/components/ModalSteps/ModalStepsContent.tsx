import { useModalSteps } from '@/common/hooks/useModalSteps';
import { Step } from '@/common/types/Step';
import { AnimatePresence } from 'framer-motion';

export const ModalStepsContent = () => {
	const { currentStep, steps } = useModalSteps();

	return (
		<AnimatePresence mode="wait">
			{steps?.map((step: Step) => {
				if (step.id !== currentStep) return null;
				return (
					<div
						key={step.id}
						className="flex items-center justify-start flex-wrap"
					>
						{step.content}
					</div>
				);
			})}
		</AnimatePresence>
	);
};
