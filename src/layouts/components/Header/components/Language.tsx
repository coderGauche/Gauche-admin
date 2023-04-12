/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 23:35:32
 * @FilePath: /vite-project/src/layouts/components/Header/components/Language.tsx
 */
import i18n from "i18next";
import { localGet } from "@/utils/util";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";

const Language = () => {
	const [language, setLanguage] = useState(localGet("i18nextLng"));

	// changeLanguage
	const changeLanguage = (val: string) => {
		i18n.changeLanguage(val);
		setLanguage(localGet("i18nextLng"));
	};
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>简体中文</span>,
			onClick: () => changeLanguage("zh"),
			disabled: language === "zh"
		},
		{
			key: "2",
			label: <span>English</span>,
			onClick: () => changeLanguage("en"),
			disabled: language === "en"
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};
export default Language;
