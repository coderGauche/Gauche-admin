/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:35:05
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 00:35:29
 * @FilePath: /vite-project/src/views/dashboard/dataVisualize/index.tsx
 */
import React, { memo } from "react";
import type { ReactNode } from "react";

interface IProps {
	children?: ReactNode;
}
const DataVisualize: React.FC<IProps> = () => {
	return <div>DataVisualize</div>;
};
export default memo(DataVisualize);
