import { motion } from 'framer-motion';

export const ScreenOverlayLoader = () => {
	return (
		<motion.div
			initial={{ y: '-100vh' }}
			animate={{ y: 0 }}
			exit={{ y: '100vh' }}
			transition={{ duration: 0.5 }}
			className="fixed left-0 top-0 bg-primary z-50 h-screen w-screen flex flex-col items-center justify-center"
		>
			<p className="text-white text-center text-5xl">enante logo</p>
		</motion.div>
	);
};
