interface Props {
	onHandleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({ onHandleSearch }) => {
	return (
		<div className="pt-2 relative text-gray-600">
			<input
				className="border-1 border-gray-200 bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
				type="search"
				name="search"
				placeholder="Search"
				onChange={onHandleSearch}
			/>
		</div>
	);
};
