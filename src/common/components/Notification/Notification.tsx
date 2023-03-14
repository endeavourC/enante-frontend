import { useState } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
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
	const [show, setShow] = useState(true);

	const classes = classNames({
		'rounded-md py-3 px-4 text-white relative text-sm': true,
		'bg-success/90': type === NotificationType.Success,
		'bg-danger/90': type === NotificationType.Error,
		'bg-info/90': type === NotificationType.Info,
	});

	const onClick = () => {
		if (!closable) return;

		setShow(false);
	};

	return (
		<AnimatePresence mode="popLayout">
			{show && (
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					className={classes}
				>
					{message}
					{closable && (
						<button className="absolute right-4 top-1/2 -translate-y-1/2 fill-white">
							<CloseIcon onClick={onClick} />
						</button>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
