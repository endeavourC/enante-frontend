import { createContext, useState, useCallback, useMemo } from 'react';
import { Step } from '@/common/types/Step';

type ModalContextType = {
	currentStep: number;
	setCurrentStep: (step: number) => void;
	setNextStep: () => void;
	setPrevStep: () => void;
	steps: Step[];
};

export const ModalStepContext = createContext<ModalContextType | null>(null);

interface Props {
	children: React.ReactNode;
	steps: Step[];
}

export const ModalStepProvider: React.FC<Props> = ({ children, steps }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const setNextStep = useCallback(() => {
		if (currentStep < steps.length) {
			setCurrentStep((prev) => prev + 1);
		}
	}, [currentStep, steps]);

	const setPrevStep = useCallback(() => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1);
		}
	}, [currentStep]);

	const values = useMemo(
		() => ({
			currentStep,
			setCurrentStep,
			steps,
			setNextStep,
			setPrevStep,
		}),
		[currentStep, steps, setNextStep, setPrevStep]
	);

	return (
		<ModalStepContext.Provider value={values}>
			{children}
		</ModalStepContext.Provider>
	);
};
