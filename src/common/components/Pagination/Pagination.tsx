import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PaginationItem } from './components/PaginationItem';
import { Results } from './components/Results';

interface Props {
	total: number;
	perPage: number;
	current: number;
	nextPage: () => void;
	goToPage: (id: number) => void;
	previousPage: () => void;
	items: number[];
}

export const Pagination: React.FC<Props> = ({
	total,
	perPage,
	previousPage,
	nextPage,
	goToPage,
	items,
	current,
}) => {
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<Results total={total} perPage={perPage} />

				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<button
							className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-white focus:z-20 focus:outline-offset-0"
							onClick={previousPage}
						>
							<BsChevronLeft className="h-5 w-5" aria-hidden="true" />
						</button>

						{items.map((item) => (
							<PaginationItem
								key={item}
								isActive={item === current}
								index={item}
								onClick={() => goToPage(item)}
							/>
						))}
						<button
							className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-white focus:z-20 focus:outline-offset-0"
							onClick={nextPage}
						>
							<BsChevronRight className="h-5 w-5" aria-hidden="true" />
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
};
