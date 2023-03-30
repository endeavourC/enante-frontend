interface Props {
	itemsLength?: number;
	children: React.ReactNode;
	isLoading: boolean;
}

export const Skeleton: React.FC<Props> = ({
	itemsLength = 10,
	children,
	isLoading,
}) => {
	const items = Array.from({ length: itemsLength }, (_, i) => i);

	if (isLoading) {
		return (
			<div
				role="status"
				className="w-full bg-white p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
			>
				<div className="w-full flex flex-col">
					{items.map((item) => (
						<div className="my-1" key={item}>
							<div className="h-2.5 w-full bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
							<div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 "></div>
						</div>
					))}
				</div>
			</div>
		);
	}

	return <> {children}</>;
};
