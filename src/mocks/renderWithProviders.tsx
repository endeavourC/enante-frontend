import { PreferencesProvider } from '@/common/context/preferencesContext';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/config/axios';
import '@/config/i18n';
import { ModalProvider } from '@/common/context/modalContext';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

vi.mock('axios');

export const renderWithProviders = (component: React.ReactNode) => {
	return render(
		<Provider store={store}>
			<ModalProvider>
				<PreferencesProvider>
					<BrowserRouter>{component}</BrowserRouter>
				</PreferencesProvider>
			</ModalProvider>
		</Provider>
	);
};
