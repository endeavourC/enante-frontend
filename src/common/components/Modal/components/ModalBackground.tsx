import { motion } from 'framer-motion';

export const ModalBackground = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="fixed inset-0 bg-black bg-opacity-25"
		/>
	);
};
