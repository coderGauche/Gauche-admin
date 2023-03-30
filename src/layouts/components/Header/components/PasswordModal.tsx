/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 16:49:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 17:05:26
 * @FilePath: /vite-project/src/layouts/components/Header/components/PasswordModal.tsx
 */
import React, { memo, useState, useImperativeHandle, Ref } from "react";
import { Modal, message } from "antd";

interface IProps {
	innerRef: Ref<{ showModal: (params: any) => void }>;
}
const PasswordModal: React.FC<IProps> = (props: IProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	useImperativeHandle(props.innerRef, () => ({
		showModal
	}));

	const showModal = (params: { name: number }) => {
		console.log(params);
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		message.success("修改密码成功 🎉🎉🎉");
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<Modal title="修改密码" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>Some Password...</p>
			<p>Some Password...</p>
			<p>Some Password...</p>
		</Modal>
	);
};
export default memo(PasswordModal);
