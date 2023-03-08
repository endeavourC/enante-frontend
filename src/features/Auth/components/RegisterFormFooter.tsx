import { Button } from '@/common/components';
import { useTranslation } from 'react-i18next';

interface Props {
	loading: boolean;
}

export const RegisterFormFooter: React.FC<Props> = ({ loading }) => {
	const { t } = useTranslation();

	return (
		<div className="flex items-center justify-start">
			<Button isLoading={loading} type="submit">
				{t('register.text')}
			</Button>
		</div>
	);
};
