/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 00:13:17
 * @FilePath: /vite-project/src/App.tsx
 */
import { HashRouter } from "react-router-dom";
import rootRouter from "@/routers/index";
import { RouterGuard } from "@/routers/routerGurad";
export const App = () => {
	return (
		<HashRouter>
			<RouterGuard routes={rootRouter} />
		</HashRouter>
	);
};

export default App;
