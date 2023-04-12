/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 23:15:31
 * @FilePath: /vite-project/src/layouts/components/Tabs/index.tsx
 */
import { Button, Dropdown, MenuProps, Tabs, message } from "antd";
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
import { DownOutlined } from "@ant-design/icons";
import { HOME_URL } from "@/config/config";

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

	const delTabs = () => {
		if (pathname === HOME_URL) return;
		props.tabsList.forEach((item: Menu.MenuOptions, index: number) => {
			if (item.path !== pathname) return;
			const nextTab = props.tabsList[index + 1] || props.tabsList[index - 1];
			if (!nextTab) return;
			navigate(nextTab.path);
		});
		message.success("删除Tabs标签 😆😆😆");
		props.setTabsList(props.tabsList.filter((item: Menu.MenuOptions) => item.path !== pathname));
	};
	const tabsClick = (path: string) => {
		navigate(path);
	};

	// close multipleTab
	const closeMultipleTab = (tabPath?: string) => {
		const handleTabsList = props.tabsList.filter((item: Menu.MenuOptions) => {
			return item.path === tabPath || item.path === HOME_URL;
		});
		props.setTabsList(handleTabsList);
		tabPath ?? navigate(HOME_URL);
	};

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>关闭当前</span>,
			onClick: () => delTabs()
		},
		{
			key: "2",
			label: <span>关闭其它</span>,
			onClick: () => closeMultipleTab(pathname)
		},
		{
			key: "3",
			label: <span>关闭所有</span>,
			onClick: () => closeMultipleTab()
		}
	];

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
					if (path !== HOME_URL) delTabs();
				}}
			/>
			<Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
				<Button className="more-button" type="primary" size="small">
					更多 <DownOutlined />
				</Button>
			</Dropdown>
		</div>
	);
};

const mapStateToProps = (state: RootState): TabsState => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
