import { FormValidationTriggerCallback } from '../types/FormValidationTriggerCallback';

export type ValidationTrigger = {
	id: number;
	trigger: FormValidationTriggerCallback;
};

export const useFormValidationTriggers = (
	initialTriggers: ValidationTrigger[] = []
) => {
	const triggers: ValidationTrigger[] = initialTriggers;

	const createTrigger = ({ id, trigger }: ValidationTrigger) => {
		triggers.push({
			id,
			trigger,
		});
	};

	return { triggers, createTrigger };
};
