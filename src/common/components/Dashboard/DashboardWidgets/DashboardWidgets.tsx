interface Props {
	children: React.ReactNode;
}

export const DashboardWidgets: React.FC<Props> = ({ children }) => {
	return <div className="grid grid-cols-3">{children}</div>;
};
