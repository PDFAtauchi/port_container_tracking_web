import React from 'react';
import { TEXT, BUTTON_TEXT, PLACE_HOLDER } from 'constants/container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';

const ContainerSchema = Yup.object().shape({
	code: Yup.string().required('Required'),
	status: Yup.string().required('Required'),
});

function ContainerComponent({ createContainerService }) {
	const statusContainerOptions = [
		{ name: 'UNLOADING', code: 'UNLOADING' },
		{ name: 'CUSTOMS_CLEARANCE', code: 'CUSTOMS_CLEARANCE' },
		{ name: 'DECONSOLIDATION', code: 'DECONSOLIDATION' },
		{ name: 'READY_FOR_PICKUP', code: 'READY_FOR_PICKUP' },
		{ name: 'PICKED_UP', code: 'PICKED_UP' },
	];

	const formik = useFormik({
		initialValues: {
			code: '',
			status: '',
		},
		validationSchema: ContainerSchema,
		onSubmit: (data) => {
			createContainerService(data);
		},
	});

	const isFormFieldInvalid = (value) =>
		!!(formik.touched[value] && formik.errors[value]);

	const getFormErrorMessage = (value) =>
		isFormFieldInvalid(value) ? (
			<small className="p-error">{formik.errors[value]}</small>
		) : (
			<small className="p-error">&nbsp;</small>
		);

	return (
		<div className="flex justify-content-center">
			<div className="card">
				<form onSubmit={formik.handleSubmit} className="p-fluid">
					<h5 className="text-center">{TEXT.TITLE}</h5>

					<div className="field">
						<span className="p-float-label">
							<InputText
								id="code"
								name="code"
								type="text"
								data-testid="code"
								value={formik.values.code}
								onChange={(e) => {
									formik.setFieldValue('code', e.target.value);
								}}
								className={classNames({
									'p-invalid': isFormFieldInvalid('code'),
								})}
							/>
							<label htmlFor="code">{PLACE_HOLDER.CODE}</label>
						</span>
						{getFormErrorMessage('code')}
					</div>

					<div className="field">
						<span className="p-float-label">
							<Dropdown
								inputId="status"
								name="status"
								data-testid="status"
								value={formik.values.status}
								onChange={(e) => {
									formik.setFieldValue('status', e.value);
								}}
								options={statusContainerOptions}
								optionValue="code"
								optionLabel="name"
								placeholder={PLACE_HOLDER.SELECT_STATUS}
								className={classNames({
									'p-invalid': isFormFieldInvalid('status'),
								})}
							/>
							<label htmlFor="status">{PLACE_HOLDER.STATUS}</label>
						</span>
						{getFormErrorMessage('status')}
					</div>

					<Button
						type="submit"
						label={BUTTON_TEXT.SUBMIT}
						data-testid="btn_submit"
						className="mt-2"
					/>
				</form>
			</div>
		</div>
	);
}

ContainerComponent.propTypes = {
	createContainerService: PropTypes.func,
};

ContainerComponent.defaultProps = {
	createContainerService: () => {},
};

export default ContainerComponent;
