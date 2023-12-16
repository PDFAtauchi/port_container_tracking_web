import axios from 'axios';
import { PORT_CONTAINER_TRACKING_BACKEND_URL } from 'constants/global';
import { CREATE_CONTAINER_URL } from 'constants/container';

const createContainerService = async (data, { onSuccess, onError }) => {
	await axios
		.post(`${PORT_CONTAINER_TRACKING_BACKEND_URL}${CREATE_CONTAINER_URL}`, data)
		.then((response) => {
			onSuccess(response);
		})
		.catch((error) => {
			const errorMessage = error.response.data.message;
			onError(errorMessage);
		});
};

export default createContainerService;
