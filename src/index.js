import React from 'react';
import { createRoot } from 'react-dom/client';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import App from 'main/App';

const rootElement =
	document.getElementById('root') || document.createElement('div');
const root = createRoot(rootElement);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
