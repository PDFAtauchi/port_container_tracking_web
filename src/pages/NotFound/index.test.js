import { render } from 'utils/testUtils';
import NotFound from 'pages/NotFound';

describe('render NotFound', () => {
	it('render view', async () => {
		// Given
		const ui = <NotFound />;

		// When
		const renderedUI = () => render({ ui });

		// Then
		expect(renderedUI).not.toThrow();
	});
});
