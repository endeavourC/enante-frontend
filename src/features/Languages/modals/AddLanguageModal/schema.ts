import i18n from '@/config/i18n';
import * as yup from 'yup';

export const schema = yup.object().shape({
	languageName: yup.string().required(i18n.t('common.validation.required')),
	fiches: yup.array().of(
		yup.object().shape({
			name: yup.string().required(i18n.t('common.validation.required')),
			description: yup.string().required(i18n.t('common.validation.required')),
			translation: yup.string().required(i18n.t('common.validation.required')),
		})
	),
});

export type FormData = yup.InferType<typeof schema>;
