import { Button } from '@/common/components';
import { Dashboard } from '@/common/components/Dashboard';
import { DashboardContent } from '@/common/components/Dashboard/DashboardContent';
import { SmartTable } from '@/common/components/SmartTable';
import { useMemo } from 'react';
import { columns } from './columns';

const Languages = () => {
	const tableColumns = useMemo(() => columns, []);

	const data = useMemo(
		() => [
			{
				name: 'English',
				code: 'en',
			},
			{
				name: 'Polish',
				code: 'pl',
			},
			{
				name: 'Dannish',
				code: 'pl',
			},
			{
				name: 'German',
				code: 'pl',
			},
			{
				name: 'Italy',
				code: 'pl',
			},
			{
				name: 'Spain',
				code: 'pl',
			},
			{
				name: 'Greece',
				code: 'pl',
			},
			{
				name: 'Norway',
				code: 'pl',
			},
			{
				name: 'Spain',
				code: 'pl',
			},
			{
				name: 'Greece',
				code: 'pl',
			},
			{
				name: 'Norway',
				code: 'pl',
			},
		],
		[]
	);

	return (
		<Dashboard>
			<DashboardContent>
				<SmartTable
					headingComponent={
						<div className="flex items-center justify-start">
							<h3 className="text-2xl leading-6 font-medium text-gray-900 mr-4">
								Languages
							</h3>
							<Button>Add new language</Button>
						</div>
					}
					columns={tableColumns}
					searchable
					sortable
					data={data}
					perPage={10}
				/>
			</DashboardContent>
		</Dashboard>
	);
};

export default Languages;
