import React from 'react';
import { render, screen } from 'utils/testUtils';
import { PUBLIC_ROUTES } from 'routes/constants';
import PublicRoutes from 'routes/routes.public';

jest.mock('pages/Home', () => ({
	__esModule: true,
	default: () => <div>Home</div>,
}));

jest.mock('pages/NotFound', () => ({
	__esModule: true,
	default: () => <div>No found</div>,
}));

jest.mock('pages/Container/create', () => ({
	__esModule: true,
	default: () => <div>Create Container</div>,
}));

describe('PublicRoutes', () => {
	it.each`
		expectedContent       | route
		${'Home'}             | ${PUBLIC_ROUTES.HOME}
		${'No found'}         | ${PUBLIC_ROUTES.NO_FOUND_ROUTE}
		${'Create Container'} | ${PUBLIC_ROUTES.CREATE_CONTAINER_ROUTE}
	`(
		'for $route should return $expectedContent',
		async ({ expectedContent, route }) => {
			// Given
			const ui = <PublicRoutes />;

			// When
			await render({ ui, route });

			// Then
			expect(screen.getByText(expectedContent)).toBeInTheDocument();
		}
	);
});
