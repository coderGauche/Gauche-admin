/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 17:12:45
 * @FilePath: /vite-project/src/layouts/components/Header/components/AvatarIcon.tsx
 */
import { useRef } from "react";
import { Avatar, Modal, Dropdown, message, MenuProps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import avatar from "@/assets/images/avatar.png";
import InfoModal from "./InfoModal";
import PasswordModal from "./PasswordModal";

interface ModalProps {
	showModal: (params: { name: number }) => void;
}
const AvatarIcon = () => {
	const navigate = useNavigate();
	const infoRef = useRef<ModalProps>(null!);
	const passRef = useRef<ModalProps>(null!);
	const goHome = () => {
		navigate("/home");
	};
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				message.success("退出登录成功！");
			}
		});
	};
	const items: MenuProps["items"] = [
		{
			label: <span onClick={goHome}>首页</span>,
			key: "0"
		},
		{
			label: <span onClick={() => infoRef.current!.showModal({ name: 11 })}>个人信息</span>,
			key: "1"
		},
		{
			label: <span onClick={() => passRef.current!.showModal({ name: 11 })}>修改密码</span>,
			key: "3"
		},
		{
			type: "divider"
		},
		{
			label: <span onClick={logout}>退出登录</span>,
			key: "4"
		}
	];
	return (
		<>
			<Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}>
				<Avatar src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

export default AvatarIcon;
