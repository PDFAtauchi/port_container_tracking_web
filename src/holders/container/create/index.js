import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import createContainerService from 'services/container';
import ContainerComponent from 'components/container/create';
import { TOAST_SUCCESS_MESSAGE } from 'constants/container';

function ContainerHolder() {
	const toast = useRef(null);

	const showError = (message) => {
		toast.current.show({
			severity: 'error',
			summary: 'Error',
			detail: message,
			life: 3000,
		});
	};

	const showSuccess = (message) => {
		toast.current.show({
			severity: 'success',
			summary: 'Success',
			detail: message,
			life: 3000,
		});
	};

	// eslint-disable-next-line no-unused-vars
	const onSuccess = (response) => {
		showSuccess(TOAST_SUCCESS_MESSAGE);
	};

	const onError = (error) => {
		showError(error);
	};

	const createContainer = async (data) => {
		await createContainerService(data, {
			onSuccess,
			onError,
		});
	};

	return (
		<>
			<Toast ref={toast} />
			<ContainerComponent createContainerService={createContainer} />
		</>
	);
}

export default ContainerHolder;
