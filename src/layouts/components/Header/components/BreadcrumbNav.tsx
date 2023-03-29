/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 15:24:33
 * @FilePath: /vite-project/src/layouts/components/Header/components/BreadcrumbNav.tsx
 */
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const BreadcrumbNav = () => {
	return (
		<Breadcrumb
			items={[
				{
					href: "",
					title: <HomeOutlined />
				},
				{
					href: "",
					title: (
						<>
							<UserOutlined />
							<span>Application List</span>
						</>
					)
				},
				{
					title: "Application"
				}
			]}
		></Breadcrumb>
	);
};

export default BreadcrumbNav;
