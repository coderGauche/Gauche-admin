/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 16:49:38
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 10:31:09
 * @FilePath: /vite-project/src/layouts/components/Header/components/InfoModal.tsx
 */
import { Modal, message } from "antd";
import React, { memo, useImperativeHandle, useState, Ref } from "react";

interface IProps {
	innerRef: Ref<{ showModal: (params: any) => void } | undefined>;
}
const InfoModal: React.FC<IProps> = props => {
	const [modalVisible, setModalVisible] = useState(false);
	useImperativeHandle(props.innerRef, () => ({
		showModal
	}));

	const showModal = () => {
		setModalVisible(true);
	};

	const handleOk = () => {
		setModalVisible(false);
		message.success("修改用户信息成功 🎉🎉🎉");
	};

	const handleCancel = () => {
		setModalVisible(false);
	};
	return (
		<Modal title="个人信息" open={modalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>User Info...</p>
			<p>User Info...</p>
			<p>User Info...</p>
		</Modal>
	);
};
export default memo(InfoModal);
