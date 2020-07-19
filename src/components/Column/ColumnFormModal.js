import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Modal } from 'antd';

const ColumnFormModal = ({ visible, onSubmit, onCancel }) => {
	const [title, setTitle] = useState();

	const handleOnCancel = () => {
		setTitle('');
		onCancel && onCancel();
	};

	return (
		<Modal
			title="Add new column"
			visible={visible}
			onOk={() => onSubmit(title)}
			onCancel={() => handleOnCancel()}
			okButtonProps={{ disabled: !title }}
		>
			<Input placeholder="Name" onChange={e => setTitle(e.target.value)} />
		</Modal>
	);
};

ColumnFormModal.propTypes = {
	visible: PropTypes.bool,
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func
};

export default ColumnFormModal;
