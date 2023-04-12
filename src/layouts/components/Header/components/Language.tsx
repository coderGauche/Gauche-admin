/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 00:13:54
 * @FilePath: /vite-project/src/layouts/components/Header/components/Language.tsx
 */
import i18n from "i18next";
import { getBrowserLang, localGet } from "@/utils/util";
import { Dropdown, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setLanguage } from "@/redux/modules/global/action";

const Language = (props: any) => {
	const [language, setLanguage] = useState(localGet("i18nextLng"));

	useEffect(() => {
		setLanguage(props.language || getBrowserLang());
		i18n.changeLanguage(props.language || getBrowserLang());
	}, [props.language]);

	// changeLanguage
	const changeLanguage = (val: string) => {
		props.setLanguage(val);
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

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(Language);
