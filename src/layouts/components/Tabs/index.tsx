/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 15:06:12
 * @FilePath: /vite-project/src/layouts/components/Tabs/index.tsx
 */
import { Tabs, message } from "antd";
// import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.less";
import { HOME_URL } from "@/config/config";

const LayoutTabs = () => {
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState<string>(pathname);
	const navigate = useNavigate();
	const [tabsList] = useState([
		{
			label: "首页",
			key: HOME_URL
		},
		{
			label: "数据大屏",
			key: "/dataScreen/index"
		},
		{
			label: "使用 Hooks",
			key: "/proTable/useHooks"
		},
		{
			label: "使用 Component",
			key: "/proTable/useComponent"
		},
		{
			label: "数据可视化",
			key: "/dashboard/dataVisualize"
		},
		{
			label: "内嵌页面",
			key: "/dashboard/embedded"
		}
	]);

	useEffect(() => {
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
				items={tabsList}
				onEdit={path => {
					delTabs(path as string);
				}}
			/>
		</div>
	);
};

export default LayoutTabs;
