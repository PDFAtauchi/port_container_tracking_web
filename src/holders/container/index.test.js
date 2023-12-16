import React from 'react';
import axios from 'axios';
import { fireEvent, render, screen, act } from 'utils/testUtils';
import ContainerHolder from 'holders/container';

jest.mock('axios');

const fillInputTextField = (id, value) => {
	const input = screen.getByTestId(id);
	fireEvent.change(input, {
		target: { value: value || '' },
	});
	fireEvent.focusOut(input);
};

const selectOption = (selectId, optionName) => {
	if (optionName) {
		const dropdown = screen.getByTestId(selectId);
		fireEvent.click(dropdown);
		const optionToSelect = screen.getByText(optionName);
		fireEvent.click(optionToSelect);
		fireEvent.click(dropdown);
	}
};

const fillForm = (data) => {
	fillInputTextField('code', data?.code);

	selectOption('status', data?.status);
};

describe('ContainerHolder', () => {
	it('should call onSuccess', async () => {
		// Given
		const ui = <ContainerHolder />;
		const response = {
			data: {
				id: 1,
				code: 'ABC',
				status: 'UNLOADING',
			},
		};
		axios.post.mockResolvedValue(response);

		// When
		await render({ ui });

		// And
		const data = {
			code: 'ABC',
			status: 'UNLOADING',
		};
		fillForm(data);

		// And
		await act(async () => {
			fireEvent.click(screen.getByTestId('btn_submit'));
		});

		// Then
		const successToast = screen.getByRole('alert');
		expect(successToast).toBeInTheDocument();
		expect(successToast.textContent).toContain('Success');
	});

	it('should call onError', async () => {
		// Given
		const ui = <ContainerHolder />;
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
		await render({ ui });

		// And
		const data = {
			code: 'ABC',
			status: 'UNLOADING',
		};
		fillForm(data);

		// And
		await act(async () => {
			fireEvent.click(screen.getByTestId('btn_submit'));
		});

		// Then
		const successToast = screen.getByRole('alert');
		expect(successToast).toBeInTheDocument();
		expect(successToast.textContent).toContain('Error');
	});
});
