/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-28 11:54:34
 * @FilePath: /vite-project/src/App.tsx
 */
import { HashRouter } from "react-router-dom";
import { setLanguage } from "@/redux/modules/global/action";
import { connect } from "react-redux";
import Router from "@/routers/index";
export const App = (props: any) => {
	console.log(props);

	return (
		<HashRouter>
			<Router />
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(App);
