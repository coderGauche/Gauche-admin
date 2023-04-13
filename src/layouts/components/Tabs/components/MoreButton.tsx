/*
 * @Author: Gauche楽
 * @Date: 2023-04-12 23:36:38
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:22:37
 * @FilePath: /vite-project/src/layouts/components/Tabs/components/MoreButton.tsx
 */
import { HOME_URL } from "@/config/config";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MoreButton = (props: any) => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();
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
			label: <span>{t("tabs.closeCurrent")}</span>,
			onClick: () => props.delTabs(pathname)
		},
		{
			key: "2",
			label: <span>{t("tabs.closeOther")}</span>,
			onClick: () => closeMultipleTab(pathname)
		},
		{
			key: "3",
			label: <span>{t("tabs.closeAll")}</span>,
			onClick: () => closeMultipleTab()
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
			<Button className="more-button" type="primary" size="small">
				{t("tabs.more")} <DownOutlined />
			</Button>
		</Dropdown>
	);
};
export default MoreButton;
