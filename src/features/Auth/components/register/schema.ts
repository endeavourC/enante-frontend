import i18n from '@/config/i18n';
import * as yup from 'yup';

export const schema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email(i18n.t('form.email.invalid'))
			.required(i18n.t('form.email.required')),
		password: yup
			.string()
			.required(i18n.t('form.password.required'))
			.min(8, i18n.t('form.password.min')),
	})
	.required();

export type FormData = yup.InferType<typeof schema>;
