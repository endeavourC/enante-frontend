import { motion } from 'framer-motion';
import { DropdownMenu } from '@/common/components';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdDelete, MdEdit } from 'react-icons/md';

interface Props {
	id: number;
	name: string;
	translation: string;
	description?: string;
	editable?: boolean;
	onRemove: (index: number) => void;
}

export const FichCard: React.FC<Props> = ({
	id,
	name,
	translation,
	description,
	editable = false,
	onRemove,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const { t } = useTranslation();

	const cardVariants = {
		selected: {
			rotateY: 180,
			scale: 1.03,
			transition: { duration: 0.3 },
		},
		notSelected: {
			rotateY: 0,
			scale: 1,
			transition: { duration: 0.3 },
		},
	};

	console.log('re-render');

	const onDelete = useCallback(
		(ev: React.MouseEvent) => {
			ev.stopPropagation();
			onRemove(id);
		},
		[id, onRemove]
	);

	const items = useMemo(
		() => [
			{
				name: t('common.edit'),
				icon: <MdEdit />,
				callback: () => {},
			},
			{
				name: t('common.delete'),
				icon: <MdDelete />,
				callback: onDelete,
			},
		],
		[t, onDelete]
	);

	const toggleFlipped = (ev: React.MouseEvent) => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<div
			style={{
				perspective: '350px',
			}}
		>
			<motion.div
				style={{
					perspective: '350px',
					transformStyle: 'preserve-3d',
				}}
				variants={cardVariants}
				animate={isFlipped ? 'selected' : 'notSelected'}
				onClick={toggleFlipped}
				className="relative p-4 bg-primary shadow-md rounded-md flex flex-col items-center justify-center cursor-pointer min-h-[100px] "
			>
				{!isFlipped ? (
					<div style={{ backfaceVisibility: 'hidden' }}>
						{editable ? (
							<div className="absolute right-2 top-2 z-[99999]">
								<DropdownMenu width="125px" items={items} />
							</div>
						) : null}
						<h1 className="text-2xl text-center text-white">{name}</h1>
						<p className="text-sm text-white">{description}</p>
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
