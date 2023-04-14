/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:35:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 17:44:56
 * @FilePath: /vite-project/src/views/dataScreen/index.tsx
 */
import { Button } from "antd";
import { getAuthorButtons } from "@/api/modules/login";
import AgeRatioChart from "./components/AgeRatioChart";
const DataScreen = () => {
	const requestMenuList = async () => {
		const res = await getAuthorButtons();
		console.log(res);
	};
	return (
		<div className="content-box">
			<span className="text">DataScreen 🍓🍇🍈🍉</span>
			<Button type="primary" onClick={requestMenuList}>
				点我发起网络请求 😎
			</Button>
			<AgeRatioChart />
		</div>
	);
};

export default DataScreen;
