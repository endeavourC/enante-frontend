interface Props {
	children: React.ReactNode;
}

export const ModalFooter: React.FC<Props> = ({ children }) => {
	return (
		<div className="bg-gray-50 px-4 sm:justify-end sm:flex sm:flex-row sm:px-6">
			{children}
		</div>
	);
};
