import { Button, Modal } from '@/common/components';
import { ButtonKind } from '@/common/components/Button/Button';
import { useModalService } from '@/common/hooks/useModalService';
import { Trans, useTranslation } from 'react-i18next';
import { LanguageType } from '../../types/language';

interface Props {
	language: LanguageType;
}

export const RemoveLanguageModal: React.FC<Props> = ({
	language: { name, id },
}) => {
	const { isOpen, closeModal } = useModalService();
	const { t } = useTranslation();

	const onDelete = () => {
		console.log(id);
	};

	return (
		<Modal onClose={closeModal} isOpen={isOpen} width="520px">
			<Modal.Heading>
				{t('languages.removeModal.title')}: {name}
			</Modal.Heading>
			<Modal.Content>
				<Trans
					i18nKey="languages.removeModal.content"
					values={{ name }}
					components={[<strong />]}
				/>
			</Modal.Content>
			<Modal.Footer>
				<span className="mr-4">
					<Button kind={ButtonKind.Danger} onClick={onDelete}>
						{t('languages.removeModal.delete')}
					</Button>
				</span>
				<Button kind={ButtonKind.Neutral} onClick={closeModal}>
					{t('languages.removeModal.cancel')}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
