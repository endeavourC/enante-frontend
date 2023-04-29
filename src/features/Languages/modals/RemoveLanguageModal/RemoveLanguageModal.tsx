import { Button, Modal } from '@/common/components';
import { ButtonKind } from '@/common/components/Button/Button';
import { useModalService } from '@/common/hooks/useModalService';
import { Trans, useTranslation } from 'react-i18next';
import { useDeleteLanguageMutation } from '../../API/languages';
import { LanguageType } from '../../types/language';
import toast from 'react-hot-toast';
interface Props {
	language: LanguageType;
}

export const RemoveLanguageModal: React.FC<Props> = ({
	language: { name, id },
}) => {
	const { isOpen, closeModal } = useModalService();
	const { t } = useTranslation();

	const [deleteLanguage, { isLoading }] = useDeleteLanguageMutation();

	const onDelete = () => {
		deleteLanguage(id).then(({ data }: any) => {
			if (data.status === 'success') {
				closeModal();
				toast.success(t('languages.removeModal.success'));
			}
		});
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
					<Button
						isLoading={isLoading}
						kind={ButtonKind.Danger}
						onClick={onDelete}
					>
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
