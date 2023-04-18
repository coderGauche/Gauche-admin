/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:59:07
 * @FilePath: /vite-project/src/layouts/components/Header/components/BreadcrumbNav.tsx
 */
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { connect } from "react-redux";
const BreadcrumbNav = (props: any) => {
	const { pathname } = useLocation();
	const { themeConfig } = props.global;
	const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || [];
	let BreadcrumbItem: BreadcrumbItemType[] = [];
	breadcrumbList.forEach((e: string) => {
		if (e !== "首页") {
			BreadcrumbItem!.push({
				title: e,
				href: ""
			});
		}
	});

	return (
		<>
			{!themeConfig.breadcrumb && (
				<Breadcrumb
					items={[
						...[
							{
								href: HOME_URL,
								title: <HomeOutlined />
							}
						],
						...BreadcrumbItem
					]}
				></Breadcrumb>
			)}
		</>
	);
};

const mapStateToProps = (state: any) => state;
export default connect(mapStateToProps)(BreadcrumbNav);
