import { Button, Modal } from '@/common/components';
import { ButtonKind } from '@/common/components/Button/Button';
import { useModal } from '@/common/hooks/useModal';
import { LanguageType } from '../types/language';

interface Props {
	language: LanguageType;
}

export const RemoveLanguageModal: React.FC<Props> = ({
	language: { name, id },
}) => {
	const { isOpen, closeModal } = useModal();

	const onDelete = () => {
		console.log(id);
	};

	return (
		<Modal onClose={closeModal} isOpen={isOpen} width="520px">
			<Modal.Heading>Removing Language: {name}</Modal.Heading>
			<Modal.Content>
				Do you want to delete your language <strong>{name}</strong> with all
				fiches related to him?
			</Modal.Content>
			<Modal.Footer>
				<span className="mr-4">
					<Button kind={ButtonKind.Danger} onClick={onDelete}>
						Delete
					</Button>
				</span>
				<Button kind={ButtonKind.Neutral} onClick={closeModal}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
