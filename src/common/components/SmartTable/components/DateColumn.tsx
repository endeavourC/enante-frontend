import { format } from 'date-fns';

interface Props {
	cell: {
		value: Date;
	};
}

export const DateColumn: React.FC<Props> = ({ cell }) => {
	const formatedDate = format(new Date(cell.value), 'dd/MM/yyyy HH:mm');

	return <>{formatedDate}</>;
};
