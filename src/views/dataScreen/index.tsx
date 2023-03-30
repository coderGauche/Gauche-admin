/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:35:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 15:51:13
 * @FilePath: /vite-project/src/views/dataScreen/index.tsx
 */
import { Button } from "antd";
import React, { memo } from "react";
import type { ReactNode } from "react";
import { getMenuList } from "@/api/modules/login";

interface IProps {
	children?: ReactNode;
}
const dataScreen: React.FC<IProps> = () => {
	const requestMenuList = async () => {
		const res = await getMenuList();
		console.log(res);
	};
	return (
		<Button type="primary" onClick={requestMenuList}>
			发起网络请求
		</Button>
	);
};
export default memo(dataScreen);
