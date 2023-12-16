import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import CreateContainer from 'pages/Container/create';

import { PUBLIC_ROUTES } from 'routes/constants';

export default function PublicRoutes() {
	return (
		<Routes>
			<Route path={PUBLIC_ROUTES.HOME_ROUTE} element={<Home />} />
			<Route path={PUBLIC_ROUTES.NO_FOUND_ROUTE} element={<NotFound />} />
			<Route
				path={PUBLIC_ROUTES.CREATE_CONTAINER_ROUTE}
				element={<CreateContainer />}
			/>
		</Routes>
	);
}
