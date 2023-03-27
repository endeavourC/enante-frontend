interface Props {
	children: React.ReactNode;
}

export const DashboardContent: React.FC<Props> = ({ children }) => {
	return <div className="py-4 pr-4 relative">{children}</div>;
};
