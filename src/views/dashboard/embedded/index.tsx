/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:58:41
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 23:43:18
 * @FilePath: /vite-project/src/views/dashboard/embedded/index.tsx
 */
import "./index.less";
import { Button } from "antd";
import { getAuthorButtons } from "@/api/modules/login";

const DataScreen = () => {
	const requestMenuList = async () => {
		const res = await getAuthorButtons();
		console.log(res);
	};
	return (
		<div className="content-box">
			<span className="text">DataScreen 🍓🍇🍈🍉</span>
			<Button type="primary" onClick={requestMenuList}>
				发起网络请求
			</Button>
		</div>
	);
};

export default DataScreen;
