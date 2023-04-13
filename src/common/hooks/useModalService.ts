import { ModalContextService } from '@/common/context/ModalContextService';
import { useContext } from 'react';

export const useModalService = () => {
	const modal = useContext(ModalContextService);

	if (!modal) {
		throw new Error('useModalService must be used within a ModalProvider');
	}

	return modal;
};
