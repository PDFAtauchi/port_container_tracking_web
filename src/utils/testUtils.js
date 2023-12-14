import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, act } from '@testing-library/react';
import { PrimeReactProvider } from 'primereact/api';
import userEvent from '@testing-library/user-event';
import App from 'main/App';

export const renderWithProviders = ({ ui = null, route = '/' } = {}) => {
	const history = createMemoryHistory({ initialEntries: [route] });
	return {
		user: userEvent.setup(),
		...render(
			<Router location={history.location} navigator={history}>
				<PrimeReactProvider>{ui}</PrimeReactProvider>
			</Router>
		),
		history,
	};
};

export const renderTest = async ({ ui = <App />, route = '/' } = {}) => {
	let wrapper;
	await act(async () => {
		wrapper = renderWithProviders({ ui, route });
	});

	return wrapper;
};

export * from '@testing-library/react';

export { renderTest as render };
