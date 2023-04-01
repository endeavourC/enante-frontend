import { createContext, useState, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';

type ModalContextType = {
	modal: React.ReactNode | null;
	setModal: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	openModal: (modal: React.ReactNode) => void;
	closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

export const ModalProvider: React.FC<Props> = ({ children }) => {
	const [modal, setModal] = useState<React.ReactNode | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = useCallback((modalComponent: React.ReactNode) => {
		setModal(modalComponent);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const values = useMemo(
		() => ({
			modal,
			setModal,
			isOpen,
			setIsOpen,
			openModal,
			closeModal,
		}),
		[modal, isOpen, openModal, closeModal]
	);

	return (
		<ModalContext.Provider value={values}>
			{children}
			{createPortal(modal, document.getElementById('modal') as HTMLElement)}
		</ModalContext.Provider>
	);
};
