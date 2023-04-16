interface Props {
	children: React.ReactNode;
}

export const ModalContent: React.FC<Props> = ({ children }) => {
	return <div className="relative px-6 pb-6">{children}</div>;
};
