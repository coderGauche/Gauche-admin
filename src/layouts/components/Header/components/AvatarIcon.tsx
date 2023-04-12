/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 00:23:26
 * @FilePath: /vite-project/src/layouts/components/Header/components/AvatarIcon.tsx
 */
import { useRef } from "react";
import { Avatar, Modal, Dropdown, message, MenuProps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import avatar from "@/assets/images/avatar.png";
import InfoModal from "./InfoModal";
import PasswordModal from "./PasswordModal";
import { HOME_URL } from "@/config/config";
import { setToken } from "@/redux/modules/global/action";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

interface ModalProps {
	showModal: (params: { name: number }) => void;
}
const AvatarIcon = (props: any) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const infoRef = useRef<ModalProps>(null);
	const passRef = useRef<ModalProps>(null);
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				props.setToken("");
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span className="dropdown-item">{t("header.home")}</span>,
			onClick: () => navigate(HOME_URL)
		},
		{
			key: "2",
			label: <span className="dropdown-item">{t("header.personalData")}</span>,
			onClick: () => infoRef.current!.showModal({ name: 11 })
		},
		{
			key: "3",
			label: <span className="dropdown-item">{t("header.changePassword")}</span>,
			onClick: () => passRef.current!.showModal({ name: 11 })
		},
		{
			type: "divider"
		},
		{
			key: "4",
			label: <span className="dropdown-item">{t("header.logout")}</span>,
			onClick: logout
		}
	];
	return (
		<>
			<Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

const mapDispatchToProps = { setToken };

export default connect(null, mapDispatchToProps)(AvatarIcon);
