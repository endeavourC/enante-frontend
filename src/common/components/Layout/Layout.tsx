import { motion, MotionProps } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props & MotionProps> = ({
	children,
	...props
}) => {
	const wrapperVariants = {
		initial: {
			clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
			transition: { duration: 0.5 },
		},
		animate: {
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			transition: { duration: 0.5, staggerChildren: 0.2 },
		},
		exit: {
			clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.main
			{...props}
			{...wrapperVariants}
			className="bg-white dark:bg-slate-900 transition-all overflow-x-hidden"
		>
			{children}
		</motion.main>
	);
};
