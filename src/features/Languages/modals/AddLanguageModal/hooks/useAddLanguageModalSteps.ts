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
		stepValidation(
			stepCallbacks,
			currentStep,
			methods.formState.isValid,
			() => {
				setNextStep();
			}
		);
	}, [currentStep, methods.formState.isValid, setNextStep, stepCallbacks]);

	const onCurrentStep = useCallback(
		(id: number) => {
			stepValidation(
				stepCallbacks,
				currentStep,
				methods.formState.isValid,
				() => {
					setCurrentStep(id);
				}
			);
		},
		[currentStep, methods.formState.isValid, setCurrentStep, stepCallbacks]
	);

	const onPrevStep = useCallback(() => {
		stepValidation(
			stepCallbacks,
			currentStep,
			methods.formState.isValid,
			() => {
				setPrevStep();
			}
		);
	}, [setPrevStep, methods.formState.isValid, currentStep, stepCallbacks]);

	return { onNextStep, onCurrentStep, onPrevStep };
};

const stepValidation = (
	stepCallbacks: Function[],
	currentStep: number,
	isValid: boolean,
	callback: () => void
) => {
	if (stepCallbacks[currentStep - 1]) {
		stepCallbacks[currentStep - 1]();
	}
	if (isValid) {
		callback();
	}
};
