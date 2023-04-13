import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PreferencesProvider } from '@/common/context/preferencesContext';
import { Provider } from 'react-redux';
import { store } from './store';
import '@/config/axios';
import '@/config/i18n';
import './index.css';
import { ModalServiceProvider } from '@/common/context/ModalContextService';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ModalServiceProvider>
				<PreferencesProvider>
					<App />
				</PreferencesProvider>
			</ModalServiceProvider>
		</Provider>
	</React.StrictMode>
);
