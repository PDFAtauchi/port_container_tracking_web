import axios from 'axios';

const createContainerService = async (data, { onSuccess, onError }) => {
	await axios
		.post('url')
		.then((response) => {
			onSuccess(response);
		})
		.catch((error) => {
			const errorMessage = error.response.data.message;
			onError(errorMessage);
		});
};

export default createContainerService;
