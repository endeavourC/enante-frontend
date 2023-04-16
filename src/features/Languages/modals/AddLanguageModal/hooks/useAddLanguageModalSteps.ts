import { useCallback } from 'react';
interface IUseAddLanguageModalSteps {
	setPrevStep: () => void;
	setNextStep: () => void;
	setCurrentStep: (id: number) => void;
	currentStep: number;
	methods: any;
	stepCallbacks: Function[];
}

export const useAddLanguageModalSteps = ({
	setPrevStep,
	setNextStep,
	currentStep,
	setCurrentStep,
	methods,
	stepCallbacks,
}: IUseAddLanguageModalSteps) => {
	const onNextStep = useCallback(() => {
		if (stepCallbacks[currentStep - 1]) {
			stepCallbacks[currentStep - 1]();
		}
		if (methods.formState.isValid) {
			setNextStep();
		}
	}, [currentStep, methods.formState.isValid, setNextStep, stepCallbacks]);

	const onCurrentStep = useCallback(
		(id: number) => {
			if (stepCallbacks[currentStep - 1]) {
				stepCallbacks[currentStep - 1]();
			}
			if (methods.formState.isValid) {
				setCurrentStep(id);
			}
		},
		[currentStep, methods.formState.isValid, setCurrentStep, stepCallbacks]
	);

	const onPrevStep = useCallback(() => {
		setPrevStep();
	}, [setPrevStep]);

	return { onNextStep, onCurrentStep, onPrevStep };
};
