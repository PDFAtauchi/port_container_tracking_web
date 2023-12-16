import createContainerService from 'services/container';
import axios from 'axios';

jest.mock('axios');

describe('createContainerService', () => {
	it('should return on success', async () => {
		// Given
		const data = '';
		const onSuccess = jest.fn();
		const onError = jest.fn();
		axios.post.mockResolvedValue(jest.fn());

		// When
		await createContainerService(data, { onSuccess, onError });

		// Then
		expect(onSuccess).toHaveBeenCalledTimes(1);
	});

	it('should return on error', async () => {
		// Given
		const data = '';
		const onSuccess = jest.fn();
		const onError = jest.fn();
		const errorMessage = 'An error ocurred';
		const errorResponse = {
			response: {
				data: {
					message: errorMessage,
				},
			},
		};

		axios.post.mockRejectedValue(errorResponse);

		// When
		await createContainerService(data, { onSuccess, onError });

		// Then
		expect(onError).toHaveBeenCalledTimes(1);
		expect(onError).toHaveBeenCalledWith(errorMessage);
	});
});
