module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./src/setupTests.js'],
	collectCoverage: true,
	reporters: [
		'default',
		[
			'jest-junit',
			{
				outputDirectory: 'test-reports',
				outputName: 'junit.xml',
			},
		],
	],
	coverageDirectory: 'coverage-reports',
	collectCoverageFrom: ['./src/**'],
	coveragePathIgnorePatterns: ['.*__snapshots__/.*'],
	moduleDirectories: ['node_modules', 'src'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	testMatch: [
		'<rootDir>/src/*.(test).{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}',
		'<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
	],
};