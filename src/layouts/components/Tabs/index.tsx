/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:24:52
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
import { RootState } from "@/redux";
import { TabsState } from "@/redux/interface";
import { HOME_URL } from "@/config/config";
import MoreButton from "./components/MoreButton";

const LayoutTabs = (props: any) => {
	const { tabsList, setTabsList } = props;
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const navigate = useNavigate();

	useEffect(() => {
		addTabs();
	}, [pathname]);

	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let newTabsList = JSON.parse(JSON.stringify(tabsList));
		if (tabsList.every((item: any) => item.path !== route.path)) {
			newTabsList.push({ title: route.meta!.title, path: route.path });
		}
		setTabsList(newTabsList);

		setActiveValue(pathname);
	};

	const delTabs = (tabPath?: string) => {
		console.log(tabPath);
		if (tabPath === HOME_URL) return;
		if (pathname === tabPath) {
			tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== pathname) return;
				const nextTab = tabsList[index + 1] || tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		message.success("删除Tabs标签 😆😆😆");
		setTabsList(tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath));
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
					tabsList
						? tabsList.map((item: Menu.MenuOptions) => {
								return {
									label: item.title,
									key: item.path
								};
						  })
						: []
				}
				onEdit={path => {
					if (path !== HOME_URL) delTabs(path as string);
				}}
			/>
			<MoreButton delTabs={delTabs} {...props}></MoreButton>
		</div>
	);
};

const mapStateToProps = (state: RootState): TabsState => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
