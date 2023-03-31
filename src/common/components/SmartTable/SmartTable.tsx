import {
	Column,
	useGlobalFilter,
	usePagination,
	useSortBy,
	useTable,
} from 'react-table';
import { AnimatePresence, animate, stagger } from 'framer-motion';
import { Pagination } from '../Pagination/Pagination';
import { useEffect } from 'react';
import { NoResultsFound } from './components/NoResultsFound';
import { TableRow } from './components/TableRow';
import { TableHead } from './components/TableHead';
import { Search } from './components/Search';

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
			<div>
				<div className="p-1.5 w-full inline-block align-middle">
					<div className="flex items-center justify-between mt-4 mb-2">
						<div>{headingComponent}</div>
						{searchable ? <Search onHandleSearch={onHandleSearch} /> : null}
					</div>

					<div className="border rounded-lg">
						<table
							{...getTableProps()}
							className="w-full divide-y divide-gray-200"
						>
							<thead className="bg-white">
								{headerGroups.map((headerGroup) => (
									<TableHead headerGroup={headerGroup} />
								))}
							</thead>
							<AnimatePresence>
								<tbody
									{...getTableBodyProps()}
									className="divide-y divide-gray-200"
								>
									{page.map((row) => {
										prepareRow(row);
										return <TableRow row={row} />;
									})}
									{!page.length ? (
										<NoResultsFound columnsLength={columns.length} />
									) : null}
								</tbody>
							</AnimatePresence>
						</table>

						{pageOptions.length > 1 ? (
							<Pagination
								current={pageIndex}
								items={pageOptions}
								nextPage={nextPage}
								goToPage={gotoPage}
								previousPage={previousPage}
								perPage={page.length}
								total={data.length}
							/>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};
