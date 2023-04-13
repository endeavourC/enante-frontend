import { ModalStepContext } from '@/common/context/ModalStepContext';
import { useContext } from 'react';

export const useModalSteps = () => {
	const modal = useContext(ModalStepContext);

	if (!modal) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	return modal;
};
