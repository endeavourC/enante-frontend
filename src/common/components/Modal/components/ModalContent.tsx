interface Props {
	children: React.ReactNode;
}

export const ModalContent: React.FC<Props> = ({ children }) => {
	return <div className="relative p-6">{children}</div>;
};
