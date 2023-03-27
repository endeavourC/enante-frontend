import { Dashboard } from '@/common/components/Dashboard';
import { DashboardContent } from '@/common/components/Dashboard/DashboardContent';
import {
	Notification,
	NotificationType,
} from '@/common/components/Notification';
import { ListSkeleton } from '@/common/components/Skeletons';
import { SmartTable } from '@/common/components/SmartTable';
import { DataLoadHandler } from '@/common/components/DataLoadHandler';
import { useMemo } from 'react';
import { useGetLanguagesQuery } from './API/languages';
import { columns } from './columns';
import { TableHeading } from './components/TableHeading';

const Languages = () => {
	const tableColumns = useMemo(() => columns, []);

	const { data, isLoading } = useGetLanguagesQuery();

	return (
		<Dashboard>
			<DashboardContent>
				<DataLoadHandler
					isLoading={isLoading}
					loader={<ListSkeleton />}
					error={
						<>
							<Notification
								type={NotificationType.Error}
								message="Something went wrong! Try to refresh the page."
							/>
							<SmartTable
								columns={tableColumns}
								searchable
								sortable
								data={[]}
								perPage={10}
							/>
						</>
					}
				>
					<SmartTable
						headingComponent={<TableHeading />}
						columns={tableColumns}
						searchable
						sortable
						data={data}
						perPage={10}
					/>
				</DataLoadHandler>
			</DashboardContent>
		</Dashboard>
	);
};

export default Languages;
