/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:36:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 00:36:22
 * @FilePath: /vite-project/src/views/proTable/useComponent/index.tsx
 */
import React, { memo } from "react";
import type { ReactNode } from "react";

interface IProps {
	children?: ReactNode;
}
const UseComponent: React.FC<IProps> = () => {
	return <div>UseComponent</div>;
};
export default memo(UseComponent);
