/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:22:22
 * @FilePath: /vite-project/src/layouts/components/Menu/index.tsx
 */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Spin } from "antd";
import * as Icons from "@ant-design/icons";
import Logo from "./components/Logo";

import type { MenuProps } from "antd";

import "./index.less";
import { findAllBreadcrumb, getOpenKeys, handleRouter, searchRoute } from "@/utils/util";
import { getMenuList } from "@/api/modules/login";
import { connect } from "react-redux";
import { setMenuList } from "@/redux/modules/menu/action";
import { setBreadcrumbList } from "@/redux/modules/breadcrumb/action";
import { setAuthRouter } from "@/redux/modules/auth/action";

const LayoutMenu = (props: any) => {
	const { isCollapse, setBreadcrumbList, setAuthRouter, setMenuList: setMenuListAction } = props;
	/**
	 * React Router v6的hooks 跳转
	 * 在v6之前的版本中可以直接使用history.push()和history.replace()来传递参数。
       在v6中使用useNavigate()实现路由跳转，但类组件中不能使用hooks函数。
       在v6版本中，HashRouter在页面刷新后不会导致路由state参数的丢失。
	 */
	const navigate = useNavigate();
	// 刷新页面菜单保持高亮
	const { pathname } = useLocation();
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]); //当前展开的 SubMenu 菜单项 key 数组

	useEffect(() => {
		setSelectedKeys([pathname]);
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [pathname, isCollapse]);

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

	//定义menu类型
	type MenuItem = Required<MenuProps>["items"][number];
	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem;
	};

	// 获取菜单列表并处理成 antd menu 需要的格式
	const [menuList, setMenuList] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(false);
	const getMenuData = async () => {
		setLoading(true);
		try {
			const { data } = await getMenuList();
			if (!data) return;
			setMenuList(deepLoopFloat(data));
			// 存储处理过后的所有面包屑导航栏到 redux 中
			setBreadcrumbList(findAllBreadcrumb(data));
			// 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
			const dynamicRouter = handleRouter(data);
			setAuthRouter(dynamicRouter);
			setMenuListAction(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getMenuData();
	}, []);

	//点击当前菜单
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		const route = searchRoute(key, props.menuList);
		if (route.isLink) window.open(route.isLink, "_blank");
		//实现跳转操作
		navigate(key);
	};

	// 动态渲染 Icon
	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};

	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.MenuOptions) => {
			// 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
			if (!item.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));
			newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)));
		});
		return newArr;
	};

	return (
		<div className="menu">
			<Spin spinning={loading} tip="Loading...">
				<Logo></Logo>
				<Menu
					theme="dark"
					mode="inline"
					triggerSubMenuAction="click"
					openKeys={openKeys}
					selectedKeys={selectedKeys}
					items={menuList}
					onClick={clickMenu}
					onOpenChange={onOpenChange}
				></Menu>
			</Spin>
		</div>
	);
};

const mapDispatchToProps = { setMenuList, setBreadcrumbList, setAuthRouter };
const mapStateToProps = (state: any) => state.menu;

export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
