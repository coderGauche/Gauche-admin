/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 01:03:28
 * @FilePath: /vite-project/src/App.tsx
 */
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/dist/locale/zh-cn";
const App = (props: any) => {
	return (
		<ConfigProvider locale={zhCN} componentSize={props.assemblySize}>
			<HashRouter>
				<Router />
			</HashRouter>
		</ConfigProvider>
	);
};
const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(App);
