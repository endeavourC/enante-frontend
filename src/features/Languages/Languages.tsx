import { Dashboard } from '@/common/components/Dashboard';
import { DashboardContent } from '@/common/components/Dashboard/DashboardContent';
import {
	Notification,
	NotificationType,
} from '@/common/components/Notification';
import { SmartTable } from '@/common/components/SmartTable';
import { ErrorHandler } from '@/common/components/ErrorHandler';
import { useMemo } from 'react';
import { useGetLanguagesQuery } from './API/languages';
import { columns } from './columns';
import { TableHeading } from './components/TableHeading';
import { Skeleton } from '@/common/components/Skeleton';

const Languages = () => {
	const tableColumns = useMemo(() => columns, []);

	const { data, isLoading } = useGetLanguagesQuery(null);

	return (
		<Dashboard>
			<DashboardContent>
				<ErrorHandler
					error={
						<Notification
							type={NotificationType.Error}
							message="Something went wrong! Try to refresh the page."
						/>
					}
				>
					<Skeleton isLoading={isLoading}>
						<SmartTable
							headingComponent={<TableHeading />}
							columns={tableColumns}
							searchable
							sortable
							data={data}
							perPage={10}
						/>
					</Skeleton>
				</ErrorHandler>
			</DashboardContent>
		</Dashboard>
	);
};

export default Languages;
