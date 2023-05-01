import { FormValidationTriggerCallback } from './FormValidationTriggerCallback';

export type Step = {
	id: number;
	title: string;
	content: React.ReactNode;
	validationTriggers?: FormValidationTriggerCallback[];
};
