import { motion, MotionProps } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props & MotionProps> = ({
	children,
	...props
}) => {
	return (
		<motion.main
			{...props}
			className="bg-white dark:bg-slate-900 transition-all overflow-x-hidden"
		>
			{children}
		</motion.main>
	);
};
