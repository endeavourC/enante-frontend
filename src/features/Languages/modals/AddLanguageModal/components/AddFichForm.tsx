interface Props {
	onClick: () => void;
}

export const AddFichForm: React.FC<Props> = ({ onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full flex items-center justify-center flex-col my-8 border-[1px] border-muted/20 p-8 rounded-md text-muted hover:text-primary hover:border-primary transition-all duration-500"
		>
			Click to create fich
		</button>
	);
};
