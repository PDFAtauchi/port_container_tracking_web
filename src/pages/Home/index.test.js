import { render } from 'utils/testUtils';
import Home from 'pages/Home';

describe('render Home', () => {
	it('render view', async () => {
		// Given
		const ui = <Home />;

		// When
		const renderedUI = () => render({ ui });

		// Then
		expect(renderedUI).not.toThrow();
	});
});
