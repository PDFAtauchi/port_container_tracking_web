import React from 'react';
import { render, renderWithProviders } from 'utils/testUtils';
import App from 'main/App';
import * as testUtils from 'utils/testUtils';

describe('render', () => {
	const renderSpy = jest.spyOn(testUtils, 'render');

	it('should render with default parameters', async () => {
		// When
		await render();

		// Then
		expect(renderSpy).toHaveBeenCalledWith();
	});

	it('should render with new parameters', async () => {
		// Given
		const ui = <App />;
		const route = '/other-route';

		// When
		await render({ ui, route });

		// Then
		expect(renderSpy).toHaveBeenCalledWith({ ui, route });
	});
});

describe('renderWithProviders', () => {
	const renderWithProvidersSpy = jest.spyOn(testUtils, 'renderWithProviders');
	it('should render with default parameters', async () => {
		// When
		renderWithProviders();

		// Then
		expect(renderWithProvidersSpy).toHaveBeenCalledWith();
	});

	it('should render with new parameters', async () => {
		// Given
		const ui = null;
		const route = '/other-route';

		// When
		renderWithProviders({ ui, route });

		// Then
		expect(renderWithProvidersSpy).toHaveBeenCalledWith({
			ui,
			route,
		});
	});
});
