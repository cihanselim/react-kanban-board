import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Popconfirm, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';

import { IssueTitle } from './Issue.styled';

const { Paragraph } = Typography;

const Issue = ({ item, isFirstColumn, isLastColumn, onEdit, onRemove, onMoveToLeftColumn, onMoveToRightColumn }) => {
	const moveActions = () => {
		if (isFirstColumn && isLastColumn) {
			return null;
		}
		if (!isFirstColumn && !isLastColumn) {
			return [
				<Tooltip placement="bottom" title="Move to left column" arrowPointAtCenter>
					<DoubleLeftOutlined key="edit" onClick={onMoveToLeftColumn} />
				</Tooltip>,
				<Tooltip placement="bottom" title="Move to right column" arrowPointAtCenter>
					<DoubleRightOutlined key="edit" onClick={onMoveToRightColumn} />
				</Tooltip>
			];
		}
		if (isFirstColumn) {
			return [
				<Tooltip placement="bottom" title="Move to right column" arrowPointAtCenter>
					<DoubleRightOutlined key="edit" onClick={onMoveToRightColumn} />
				</Tooltip>
			];
		}
		if (isLastColumn) {
			return [
				<Tooltip placement="bottom" title="Move to left column" arrowPointAtCenter>
					<DoubleLeftOutlined key="edit" onClick={onMoveToLeftColumn} />
				</Tooltip>
			];
		}
	};

	return (
		<Card
			actions={[
				...moveActions(),
				<EditOutlined key="edit" onClick={onEdit} />,
				<Popconfirm placement="bottomLeft" title="Are you sure to delete this issue?" onConfirm={onRemove} okText="Yes" cancelText="No" arrowPointAtCenter>
					<DeleteOutlined style={{ color: 'red' }} key="delete" />
				</Popconfirm>
			]}
		>
			<IssueTitle>{item.title}</IssueTitle>
			<Paragraph className="mh-100 description">
				{item.description}
			</Paragraph>
		</Card>
	);
};

Issue.propTypes = {
	item: PropTypes.object,
	isFirstColumn: PropTypes.bool,
	isLastColumn: PropTypes.bool,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	onMoveToLeftColumn: PropTypes.func,
	onMoveToRightColumn: PropTypes.func,
};

export default Issue;
