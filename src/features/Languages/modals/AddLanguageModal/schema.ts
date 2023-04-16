import * as yup from 'yup';

export const schema = yup.object().shape({
	languageName: yup.string().required('To pole jest wymagane.'),
});

export type FormData = yup.InferType<typeof schema>;
