/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 10:30:02
 * @FilePath: /vite-project/src/layouts/components/Tabs/index.tsx
 */
import { Tabs, message } from "antd";
// import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.less";
import { connect } from "react-redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { searchRoute } from "@/utils/util";
import { routerArray } from "@/routers";

const LayoutTabs = (props: any) => {
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const navigate = useNavigate();

	useEffect(() => {
		addTabs();
	}, [pathname]);

	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let tabsList: any = props.tabsList ? JSON.parse(JSON.stringify(props.tabsList)) : [];
		if (props.tabsList.every((item: any) => item.path !== route.path)) {
			tabsList.push({ title: route.meta!.title, path: route.path });
		}
		props.setTabsList(tabsList);

		setActiveValue(pathname);
	};

	const delTabs = (tabPath: string) => {
		if (tabPath === pathname) {
			props.tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== tabPath) return;
				const nextTab = props.tabsList[index + 1] || props.tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		message.success("删除Tabs标签 😆😆😆");
		props.setTabsList(props.tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath));
	};
	const tabsClick = (path: string) => {
		navigate(path);
	};

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={tabsClick}
				hideAdd
				type="editable-card"
				items={
					props.tabsList
						? props.tabsList.map((item: Menu.MenuOptions) => {
								return {
									label: item.title,
									key: item.path
								};
						  })
						: []
				}
				onEdit={path => {
					delTabs(path as string);
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state: any) => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
