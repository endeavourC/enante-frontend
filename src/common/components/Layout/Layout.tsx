interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main className="bg-white dark:bg-slate-900 transition-all">
			{children}
		</main>
	);
};
