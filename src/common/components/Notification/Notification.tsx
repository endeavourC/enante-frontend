import classNames from 'classnames';
import { ReactComponent as CloseIcon } from '@/assets/close-icon.svg';

export enum NotificationType {
	Success = 'success',
	Error = 'error',
	Info = 'info',
}

interface Props {
	message: string;
	type: NotificationType;
	closable?: boolean;
}

export const Notification: React.FC<Props> = ({ message, type, closable }) => {
	const classes = classNames({
		'rounded-md py-3 px-4 text-white relative text-sm': true,
		'bg-success/90': type === NotificationType.Success,
		'bg-danger/90': type === NotificationType.Error,
		'bg-info/90': type === NotificationType.Info,
	});

	const onClick = () => {
		if (!closable) return;
	};

	return (
		<>
			<div className={classes}>
				{message}
				{closable && (
					<button className="absolute right-4 top-1/2 -translate-y-1/2 fill-white">
						<CloseIcon onClick={onClick} />
					</button>
				)}
			</div>
		</>
	);
};
