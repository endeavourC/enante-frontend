import {
	createContext,
	useState,
	useCallback,
	useMemo,
	useEffect,
} from 'react';
import { Step } from '@/common/types/Step';

type ModalContextType = {
	currentStep: number;
	setCurrentStep: (step: number) => void;
	setNextStep: () => void;
	setPrevStep: () => void;
	setStep: (step: number) => void;
	steps: Step[];
};

export const ModalStepContext = createContext<ModalContextType | null>(null);

interface Props {
	children: React.ReactNode;
	methods?: any;
	steps: Step[];
}

export const ModalStepProvider: React.FC<Props> = ({
	methods,
	children,
	steps,
}) => {
	const [currentStep, setCurrentStep] = useState(1);

	const setNextStep = useCallback(() => {
		if (currentStep < steps.length) {
			stepValidation(
				steps,
				currentStep,
				() => {
					setCurrentStep((prev) => prev + 1);
				},
				methods
			);
		}
	}, [currentStep, steps, methods]);

	const setStep = useCallback(
		(id: number) => {
			stepValidation(
				steps,
				currentStep,
				() => {
					setCurrentStep(id);
				},
				methods
			);
		},
		[steps, currentStep, methods]
	);

	const setPrevStep = useCallback(() => {
		if (currentStep > 1) {
			stepValidation(
				steps,
				currentStep,
				() => {
					setCurrentStep((prev) => prev - 1);
				},
				methods
			);
		}
	}, [currentStep, steps, methods]);

	const values = useMemo(
		() => ({
			currentStep,
			setCurrentStep,
			steps,
			setNextStep,
			setPrevStep,
			setStep,
		}),
		[currentStep, steps, setNextStep, setPrevStep, setStep]
	);

	return (
		<ModalStepContext.Provider value={values}>
			{children}
		</ModalStepContext.Provider>
	);
};

const stepValidation = (
	steps: Step[],
	currentStep: number,
	callback: () => void,
	methods?: any
) => {
	if (!methods) return callback();

	const step = steps.find((step) => step.id === currentStep);

	if (step?.validationTriggers) {
		step.validationTriggers.map((trigger) =>
			trigger(methods).then(
				({ canGoToNextStep }: { canGoToNextStep: boolean }) => {
					if (canGoToNextStep && methods.formState.isValid) {
						callback();
					}
				}
			)
		);
	} else {
		if (methods.formState.isValid) {
			callback();
		}
	}
};
