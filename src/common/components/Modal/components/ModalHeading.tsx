import { useModalService } from '@/common/hooks/useModalService';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
	children: React.ReactNode;
}

export const ModalHeading: React.FC<Props> = ({ children }) => {
	const { closeModal } = useModalService();

	return (
		<div className="relative p-6 font-bold">
			{children}
			<button
				onClick={closeModal}
				className="absolute top-1/2 right-6 -translate-y-1/2"
			>
				<AiOutlineClose size="25px" />
			</button>
		</div>
	);
};
