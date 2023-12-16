import React from 'react';
import { fireEvent, render, screen, act } from 'utils/testUtils';
import ContainerComponent from 'components/container/create';
import { TEXT } from 'constants/container';

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

describe('ContainerComponent', () => {
	it('should render successful', async () => {
		// Given
		const ui = <ContainerComponent />;

		// When
		await render({ ui });

		// Then
		expect(screen.getByText(TEXT.TITLE)).toBeInTheDocument();
	});

	it('should call containerCreate service', async () => {
		// Given
		const createContainerService = jest.fn();
		const ui = (
			<ContainerComponent createContainerService={createContainerService} />
		);
		await render({ ui });

		// When
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
		expect(createContainerService).toHaveBeenCalledTimes(1);
	});

	it('should does not call containerCreate service', async () => {
		// Given
		const createContainerService = jest.fn();
		const ui = (
			<ContainerComponent createContainerService={createContainerService} />
		);
		await render({ ui });

		// When
		const data = {
			code: 'ABC',
			status: '',
		};
		fillForm(data);

		// And
		await act(async () => {
			fireEvent.click(screen.getByTestId('btn_submit'));
		});

		// Then
		expect(createContainerService).toHaveBeenCalledTimes(0);
	});
});
