import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Modal } from 'antd';

const { TextArea } = Input;

const IssueFormModal = ({ visible, issue, onSubmit, onCancel }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	useEffect(() => {
		setTitle(issue?.title ?? '');
		setDescription(issue?.description ?? '');
	}, [issue]);

	const handleOnCancel = () => {
		setTitle('');
		setDescription('');
		onCancel && onCancel();
	};

	return (
		<Modal
			title="Add new issue"
			visible={visible}
			onOk={() => onSubmit(issue?.id, title, description)}
			onCancel={() => handleOnCancel()}
			okButtonProps={{ disabled: !title }}
		>
			<Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
			<TextArea
				placeholder="Description"
				value={description}
				onChange={e => setDescription(e.target.value)}
				autoSize={{ minRows: 3, maxRows: 6 }}
				style={{ marginTop: 4 }} />
		</Modal>
	);
};

IssueFormModal.propTypes = {
	visible: PropTypes.bool,
	issue: PropTypes.object,
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func
};

export default IssueFormModal;
