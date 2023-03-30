/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 17:14:05
 * @FilePath: /vite-project/src/layouts/components/Menu/index.tsx
 */
import { useEffect, useState } from "react";
import {
	HomeOutlined,
	TableOutlined,
	PieChartOutlined,
	FileTextOutlined,
	AreaChartOutlined,
	FundOutlined,
	ShoppingOutlined,
	AppstoreOutlined
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import Logo from "./components/Logo";

import type { MenuProps } from "antd";

import "./index.less";
import { getOpenKeys } from "@/utils/util";

const LayoutMenu = () => {
	/**
	 * React Router v6的hooks 跳转
	 * 在v6之前的版本中可以直接使用history.push()和history.replace()来传递参数。
       在v6中使用useNavigate()实现路由跳转，但类组件中不能使用hooks函数。
       在v6版本中，HashRouter在页面刷新后不会导致路由state参数的丢失。
	 */
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [selectedKeys, setSelectedKeys] = useState(pathname);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	useEffect(() => {
		setSelectedKeys(pathname);
		setOpenKeys(getOpenKeys(pathname));
	}, [pathname]);

	const menuList = [
		{
			label: "首页",
			key: "/home",
			icon: <HomeOutlined />
		},
		{
			label: "数据大屏",
			key: "/dataScreen",
			icon: <AreaChartOutlined />
		},
		{
			label: "超级表格",
			key: "/proTable",
			icon: <TableOutlined />,
			children: [
				{
					label: "使用 Hooks",
					key: "/proTable/useHooks",
					icon: <AppstoreOutlined />
				},
				{
					label: "使用 Component",
					key: "/proTable/useComponent",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Dashboard",
			key: "/dashboard",
			icon: <FundOutlined />,
			children: [
				{
					key: "/dashboard/dataVisualize",
					label: "数据可视化",
					icon: <AppstoreOutlined />
				},
				{
					key: "/dashboard/embedded",
					label: "内嵌页面",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "表单 Form",
			key: "/form",
			icon: <FileTextOutlined />,
			children: [
				{
					key: "/form/basicForm",
					label: "基础 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/validateForm",
					label: "校验 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/dynamicForm",
					label: "动态 Form",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Echarts",
			key: "/echarts",
			icon: <PieChartOutlined />,
			children: [
				{
					key: "/echarts/waterChart",
					label: "水型图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/columnChart",
					label: "柱状图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/lineChart",
					label: "折线图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/pieChart",
					label: "饼图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/radarChart",
					label: "雷达图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/nestedChart",
					label: "嵌套环形图",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "常用组件",
			key: "/assembly",
			icon: <ShoppingOutlined />,
			children: [
				{
					key: "/assembly/selectIcon",
					label: "Icon 选择",
					icon: <AppstoreOutlined />
				},
				{
					key: "/assembly/batchImport",
					label: "批量导入数据",
					icon: <AppstoreOutlined />
				}
			]
		}
	];
	// type MenuItem = Required<MenuProps>["items"][number];
	// const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
	// 	return {
	// 		key,
	// 		icon,
	// 		children,
	// 		label
	// 	} as MenuItem;
	// };

	//点击当前菜单
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		//实现跳转操作
		navigate(key);
	};

	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys: string[]) => {
		//为了如果只有一层或者两层的话 直接返回
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		//拿最后一个是为了拿到点击的那个路径
		const latestOpenKey = openKeys[openKeys.length - 1];
		// 最新展开的 SubMenu //判断第一个和第二个是否相同
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		//不相等那最新的
		setOpenKeys([latestOpenKey]);
	};

	return (
		<div className="menu">
			<Logo></Logo>
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={openKeys}
				selectedKeys={[selectedKeys]}
				items={menuList}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
			></Menu>
		</div>
	);
};

export default LayoutMenu;
