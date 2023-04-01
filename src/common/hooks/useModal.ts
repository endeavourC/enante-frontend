import { ModalContext } from '@/common/context/modalContext';
import { useContext } from 'react';

export const useModal = () => {
	const modal = useContext(ModalContext);

	if (!modal) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	return modal;
};
