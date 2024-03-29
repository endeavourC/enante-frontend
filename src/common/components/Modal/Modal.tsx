import { AnimatePresence, motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { ModalBackground } from './components/ModalBackground';
import { ModalHeading } from './components/ModalHeading';
import { ModalFooter } from './components/ModalFooter';
import { ModalContent } from './components/ModalContent';
import { ModalStepsHeadline } from './components/ModalSteps/ModalStepsHeadline';
import { ModalStepsContent } from './components/ModalSteps/ModalStepsContent';

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	width?: string;
	onClose: () => void;
};
const Modal = ({ onClose, isOpen, children, width }: Props) => {
	return (
		<AnimatePresence>
			{isOpen ? (
				<Dialog
					as="div"
					className="relative z-10"
					open={isOpen}
					onClose={onClose}
				>
					<ModalBackground />
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						exit={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="fixed inset-0 overflow-y-auto"
					>
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Dialog.Panel
								style={{ maxWidth: width || '448px' }}
								className="w-full transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
							>
								{children}
							</Dialog.Panel>
						</div>
					</motion.div>
				</Dialog>
			) : null}
		</AnimatePresence>
	);
};

Modal.Heading = ModalHeading;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.StepsHeadline = ModalStepsHeadline;
Modal.StepsContent = ModalStepsContent;

export { Modal };
