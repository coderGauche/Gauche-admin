/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 23:52:47
 * @FilePath: /vite-project/src/layouts/components/Header/index.tsx
 */
import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<span className="username">Hooks</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};
export default LayoutHeader;
