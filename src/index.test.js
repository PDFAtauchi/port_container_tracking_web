import index from 'index';

describe('Application root index.js', () => {
	it('Should render app without crashing', () => {
		expect(
			JSON.stringify({ ...index, _reactInternalInstance: 'censored' })
		).toMatchSnapshot();
	});
});
