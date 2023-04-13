import { useModalSteps } from '@/common/hooks/useModalSteps';
import { Step } from '@/common/types/Step';
import { AnimatePresence, motion } from 'framer-motion';

export const ModalStepsContent = () => {
	const { currentStep, steps } = useModalSteps();

	return (
		<AnimatePresence mode="wait">
			{steps?.map((step: Step) => {
				if (step.id !== currentStep) return null;
				return (
					<motion.div
						key={step.id}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="flex items-center justify-start flex-wrap"
					>
						{step.content}
					</motion.div>
				);
			})}
		</AnimatePresence>
	);
};
