export type FormValidationTriggerCallback = (methods?: any) => Promise<{
	canGoToNextStep: boolean;
}>;
