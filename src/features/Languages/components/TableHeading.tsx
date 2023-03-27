import { Button } from '@/common/components';

export const TableHeading = () => {
	return (
		<div className="flex items-center justify-start">
			<h3 className="text-2xl leading-6 font-medium text-gray-900 mr-4">
				Languages
			</h3>
			<Button>Add new language</Button>
		</div>
	);
};
