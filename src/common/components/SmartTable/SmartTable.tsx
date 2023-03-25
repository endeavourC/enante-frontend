import {
	Column,
	useGlobalFilter,
	usePagination,
	useSortBy,
	useTable,
} from 'react-table';
import { motion, AnimatePresence, animate, stagger } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Pagination } from '../Pagination/Pagination';
import { useEffect } from 'react';

interface Props {
	data: any;
	columns: Column[];
	perPage: number;
	sortable?: boolean;
	searchable?: boolean;
	headingComponent?: React.ReactNode;
}

export const SmartTable: React.FC<Props> = ({
	columns,
	data,
	sortable,
	searchable,
	perPage,
	headingComponent = null,
}) => {
	const {
		headerGroups,
		getTableBodyProps,
		getTableProps,
		prepareRow,
		page,
		state: { pageIndex },
		pageOptions,
		previousPage,
		nextPage,
		gotoPage,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageSize: perPage },
			disableSortBy: !sortable,
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGlobalFilter(e.target.value || undefined);
	};

	useEffect(() => {
		animate(
			'tr',
			{
				opacity: 1,
			},
			{
				delay: stagger(0.03),
				type: 'tween',
			}
		);
	}, [pageIndex]);

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto">
				<div className="p-1.5 w-full inline-block align-middle">
					<div className="flex items-center justify-between mt-4 mb-2">
						<div>{headingComponent}</div>
						{searchable ? (
							<div className="pt-2 relative text-gray-600">
								<input
									className="border-1 border-gray-200 bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
									type="search"
									name="search"
									placeholder="Search"
									onChange={onHandleSearch}
								/>
								<button
									type="submit"
									className="absolute right-0 top-0 mt-5 mr-4"
								></button>
							</div>
						) : null}
					</div>

					<div className="overflow-hidden border rounded-lg">
						<table
							{...getTableProps()}
							className="w-full divide-y divide-gray-200"
						>
							<thead className="bg-white ">
								{headerGroups.map((headerGroup) => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map((column) => (
											<motion.th
												{...column.getHeaderProps({
													...column.getSortByToggleProps(),
													style: {
														width: column.width,
													},
												})}
												scope="col"
												className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase"
											>
												{column.render('Header')}
												<span className="inline-block ml-2 align-middle">
													{column.isSorted ? (
														column.isSortedDesc ? (
															<BsChevronDown />
														) : (
															<BsChevronUp />
														)
													) : null}
												</span>
											</motion.th>
										))}
									</tr>
								))}
							</thead>
							<AnimatePresence mode="wait">
								<tbody
									{...getTableBodyProps()}
									className="divide-y divide-gray-200"
								>
									{page.map((row) => {
										prepareRow(row);
										return (
											<motion.tr
												exit={{
													opacity: 0,
												}}
												initial={{
													opacity: 0,
												}}
												animate={{
													opacity: 1,
												}}
												layout
												{...row.getRowProps()}
												className="bg-white"
											>
												{row.cells.map((cell) => {
													return (
														<td
															{...cell.getCellProps({
																style: {
																	width: cell.column.width,
																},
															})}
															className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
														>
															{cell.render('Cell')}
														</td>
													);
												})}
											</motion.tr>
										);
									})}
								</tbody>
							</AnimatePresence>
						</table>
						<Pagination
							current={pageIndex}
							items={pageOptions}
							nextPage={nextPage}
							goToPage={gotoPage}
							previousPage={previousPage}
							perPage={page.length}
							total={data.length}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
