import axios from '@/config/axios';

export const languageTrigger = async (methods: any) => {
	const isValid = await methods.trigger(['languageName']);

	if (isValid) {
		const request = await axios.get(
			`/languages/exists?languageName=${methods.getValues('languageName')}`
		);

		const isAlreadyExists = await !!request.data.count;

		if (isAlreadyExists) {
			methods.setError('languageName', {
				type: 'server',
				message: 'Language already exists',
			});
			return {
				canGoToNextStep: false,
			};
		}
	}

	return {
		canGoToNextStep: true,
	};
};
