import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
	return (
		<PrimeReactProvider>
			<div className="App">Port Container Tracking</div>;
		</PrimeReactProvider>
	);
}

export default App;
