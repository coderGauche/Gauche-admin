/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 17:59:05
 * @FilePath: /vite-project/src/layouts/components/Tabs/index.tsx
 */
import { Tabs, message } from "antd";
// import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.less";
import { connect } from "react-redux";
import { addTabs } from "@/redux/modules/tabs/action";
import { searchRoute } from "@/utils/util";
import { routerArray } from "@/routers";

const LayoutTabs = (props: any) => {
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const navigate = useNavigate();

	useEffect(() => {
		const route = searchRoute(pathname, routerArray);
		props.addTabs({ title: route.meta!.title, path: route.path });
		console.log(props.tabsList);
		setActiveValue(pathname);
	}, [pathname]);

	const tabsClick = (path: string) => {
		navigate(path);
	};

	const delTabs = (path: string) => {
		console.log(path);
		message.success("删除Tabs标签 😆😆😆");
	};

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={tabsClick}
				hideAdd
				type="editable-card"
				items={props.tabsList.map((item: Menu.MenuOptions) => {
					return {
						label: item.title,
						key: item.path
					};
				})}
				onEdit={path => {
					delTabs(path as string);
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state: any) => state.tabs;
const mapDispatchToProps = { addTabs };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
