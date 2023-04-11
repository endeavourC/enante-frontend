import {
	Dashboard,
	DashboardContent,
	Notification,
	NotificationType,
	ErrorHandler,
	SmartTable,
} from '@/common/components';
import { useMemo } from 'react';
import { useGetLanguagesQuery } from './API/languages';
import { columns } from './columns';
import { TableHeading } from './components/TableHeading';
import { Skeleton } from '@/common/components/Skeleton';
import { useTranslation } from 'react-i18next';

const Languages = () => {
	const tableColumns = useMemo(() => columns, []);
	const { t } = useTranslation();

	const { data, isLoading } = useGetLanguagesQuery();

	return (
		<Dashboard>
			<DashboardContent>
				<ErrorHandler
					error={
						<Notification
							type={NotificationType.Error}
							message={t('errorHandler.error')}
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
