import React from 'react';
import { screen, render } from 'utils/testUtils';
import App from 'main/App';

it('Render App', async () => {
	// Given
	const ui = <App />;

	// When
	await render({ ui });

	// Then
	expect(screen.getByText('Port Container Tracking')).toBeInTheDocument();
});
