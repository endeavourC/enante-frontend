import {
	createContext,
	useState,
	useCallback,
	useMemo,
	useEffect,
} from 'react';
import { createPortal } from 'react-dom';

type ModalContextServiceType = {
	modal: React.ReactNode | null;
	setModal: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	openModal: (modal: React.ReactNode) => void;
	closeModal: () => void;
};

export const ModalContextService =
	createContext<ModalContextServiceType | null>(null);

interface Props {
	children: React.ReactNode;
}

export const ModalServiceProvider: React.FC<Props> = ({ children }) => {
	const [domReady, setDomReady] = useState<boolean>(false);
	const [modal, setModal] = useState<React.ReactNode | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = useCallback((modalComponent: React.ReactNode) => {
		setModal(modalComponent);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
		setTimeout(() => {
			setModal(null);
		}, 500);
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

	useEffect(() => {
		setDomReady(true);
	}, []);

	return (
		<ModalContextService.Provider value={values}>
			{children}
			{domReady && document.getElementById('modal')
				? createPortal(modal, document.getElementById('modal') as HTMLElement)
				: null}
		</ModalContextService.Provider>
	);
};
