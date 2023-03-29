/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 15:02:46
 * @FilePath: /vite-project/src/layouts/components/Menu/index.tsx
 */
import { useEffect, useState } from "react";
import { HomeOutlined, TableOutlined, AreaChartOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import Logo from "./components/Logo";
import "./index.less";

const LayoutMenu = () => {
	const { pathname } = useLocation();
	const [menuActive, setMenuActive] = useState(pathname);
	const [menuList] = useState([
		{
			label: "首页",
			icon: <HomeOutlined />,
			key: "/home"
		},
		{
			label: "数据大屏",
			icon: <AreaChartOutlined />,
			key: "/dataScreen"
		},
		{
			label: "超级表格",
			icon: <TableOutlined />,
			key: "/proTable",
			children: [
				{
					label: "使用 Hooks",
					key: "/table/useHooks"
				},
				{
					label: "使用 Hooks1",
					key: "/table/useHooks1"
				}
			]
		}
	]);

	useEffect(() => {
		setMenuActive(pathname);
	}, [pathname]);

	// type MenuItem = Required<MenuProps>["items"][number];
	// const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
	// 	return {
	// 		key,
	// 		icon,
	// 		children,
	// 		label
	// 	} as MenuItem;
	// };

	return (
		<div className="menu">
			<Logo></Logo>
			<Menu theme="dark" mode="inline" triggerSubMenuAction="click" selectedKeys={[menuActive]} items={menuList}></Menu>
		</div>
	);
};

export default LayoutMenu;
