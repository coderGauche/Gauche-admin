/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 00:07:29
 * @FilePath: /vite-project/src/App.tsx
 */
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import zhCN from "antd/lib/locale/zh_CN";
import enUs from "antd/lib/locale/en_US";
import "moment/dist/locale/zh-cn";
import { useEffect, useState } from "react";
import { getBrowserLang } from "@/utils/util";
const App = (props: any) => {
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	const setLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (props.language && props.language === "zh") return setI18nLocale(zhCN);
		if (props.language && props.language === "en") return setI18nLocale(enUs);
		if (getBrowserLang() === "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() === "en") return setI18nLocale(enUs);
	};

	useEffect(() => {
		setLanguage();
	}, [props.language]);
	return (
		<ConfigProvider locale={i18nLocale} componentSize={props.assemblySize}>
			<HashRouter>
				<Router />
			</HashRouter>
		</ConfigProvider>
	);
};
const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(App);
