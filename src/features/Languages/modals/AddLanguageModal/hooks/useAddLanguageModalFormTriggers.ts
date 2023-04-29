import { useCurrentUser } from '@/common/hooks/useCurrentUser';
import { useCallback, useMemo } from 'react';

export const useAddLanguageModalFormTriggers = (methods: any) => {
	const { token } = useCurrentUser();

	const triggerFirstStep = useCallback(() => {
		methods.trigger(['languageName']);
	}, [methods]);

	const stepCallbacks = useMemo(() => [triggerFirstStep], [triggerFirstStep]);

	return { stepCallbacks };
};
