import { DateColumn } from '@/common/components/SmartTable/components/DateColumn';
import { TableActionCell } from './components/TableActionCell';
export const columns = [
	{
		Header: 'Id',
		accessor: 'id',
		width: 'auto',
	},
	{
		Header: 'Name',
		accessor: 'name',
		width: 'auto',
	},
	{
		Header: 'Created',
		accessor: 'created_at',
		width: 'auto',
		Cell: DateColumn,
	},
	{
		Header: 'Updated',
		accessor: 'updated_at',
		width: 'auto',
		Cell: DateColumn,
	},
	{
		Header: 'Actions',
		accessor: 'actions',
		disableSortBy: true,
		width: 150,
		Cell: TableActionCell,
	},
];
