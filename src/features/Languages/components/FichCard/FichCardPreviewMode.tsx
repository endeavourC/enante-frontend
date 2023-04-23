import { DropdownMenu } from '@/common/components';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { variants } from './utils/variants';
import { MdDelete, MdEdit } from 'react-icons/md';

interface IProps {
	isFlipped: boolean;
	editable?: boolean;
	id: number;
	name: string;
	translation: string;
	description?: string;
	toggleFlipped: () => void;
	onEdit: () => void;
	onDelete: () => void;
}

export const FichCardPreviewMode: React.FC<IProps> = ({
	isFlipped,
	editable,
	id,
	toggleFlipped,
	name,
	translation,
	description,
	onEdit,
	onDelete,
}) => {
	const { t } = useTranslation();

	const items = useMemo(
		() => [
			{
				name: t('common.edit'),
				icon: <MdEdit />,
				callback: onEdit,
			},
			{
				name: t('common.delete'),
				icon: <MdDelete />,
				callback: onDelete,
			},
		],
		[t, onDelete, onEdit]
	);

	return (
		<div
			style={{
				perspective: '350px',
				zIndex: 100000 - id,
			}}
			className="relative"
		>
			<motion.div
				style={{
					transformStyle: 'preserve-3d',
				}}
				variants={variants}
				animate={isFlipped ? 'selected' : 'notSelected'}
				onClick={toggleFlipped}
				className="p-4 bg-primary shadow-md rounded-md flex flex-col items-center justify-center cursor-pointer min-h-[100px] "
			>
				{!isFlipped ? (
					<div style={{ backfaceVisibility: 'hidden' }}>
						{editable ? (
							<div className="absolute right-2 top-2">
								<DropdownMenu width="125px" items={items} />{' '}
							</div>
						) : null}
						<h1 className="text-2xl text-center text-white">{name}</h1>
						<p className="text-sm text-white text-center">{description}</p>
					</div>
				) : (
					<div
						style={{
							transform: 'rotateY(180deg)',
							backfaceVisibility: 'hidden',
						}}
					>
						<h2 className="text-lg text-white">{translation}</h2>
					</div>
				)}
			</motion.div>
		</div>
	);
};
