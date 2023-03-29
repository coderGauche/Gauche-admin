/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 00:05:23
 * @FilePath: /vite-project/src/layouts/components/Tabs/index.tsx
 */
import { Tabs } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.less";

const LayoutTabs = () => {
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const [tabsList] = useState([
		{
			label: `首页 ${(<HomeFilled />)}`,
			key: "/home"
		},
		{
			label: "超级表格",
			key: "/proTable"
		},
		{
			label: "数据大屏",
			key: "/dataScreen"
		},
		{
			label: "使用 Hooks",
			key: "/useHooks"
		}
	]);

	useEffect(() => {
		setActiveValue(pathname);
	}, [pathname]);

	const tabsClick = (path: string) => {
		console.log(path);
	};

	const delTabs = (path: string) => {
		console.log(path);
	};

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={tabsClick}
				hideAdd
				type="editable-card"
				items={tabsList}
				onEdit={path => {
					delTabs(path as string);
				}}
			/>
		</div>
	);
};

export default LayoutTabs;
