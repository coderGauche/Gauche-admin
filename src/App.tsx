/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 23:09:14
 * @FilePath: /vite-project/src/App.tsx
 */
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
export const App = () => {
	return (
		<HashRouter>
			<Router />
		</HashRouter>
	);
};

export default App;
