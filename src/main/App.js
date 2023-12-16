import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PublicRoutes } from 'routes';

function App() {
	return (
		<PrimeReactProvider>
			<PublicRoutes />
		</PrimeReactProvider>
	);
}

export default App;
