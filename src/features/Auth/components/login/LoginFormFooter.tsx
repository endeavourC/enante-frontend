import { Button } from '@/common/components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
	loading: boolean;
}

export const LoginFormFooter: React.FC<Props> = ({ loading }) => {
	const { t } = useTranslation();

	return (
		<div className="flex items-center justify-start">
			<Button isLoading={loading} type="submit">
				{t('login.text')}
			</Button>
			<span className="mx-4 text-sm text-muted dark:text-white">
				{t('login.or')}
			</span>
			<Link className="text-blue-400 hover:text-primary " to="/register">
				{t('register.text')}
			</Link>
		</div>
	);
};
