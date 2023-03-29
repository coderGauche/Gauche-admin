/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:35:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 00:35:59
 * @FilePath: /vite-project/src/views/dataScreen/index.tsx
 */
import React, { memo } from "react";
import type { ReactNode } from "react";

interface IProps {
	children?: ReactNode;
}
const dataScreen: React.FC<IProps> = () => {
	return <div>dataScreen</div>;
};
export default memo(dataScreen);
