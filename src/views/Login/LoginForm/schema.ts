import * as yup from 'yup';

export const schema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Niepoprawny Adres E-mail')
			.required('Adres E-mail jest wymagany'),
		password: yup.string().required('Hasło jest wymagane'),
	})
	.required();

export type FormData = yup.InferType<typeof schema>;
