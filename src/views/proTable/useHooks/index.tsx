/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:36:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 00:36:46
 * @FilePath: /vite-project/src/views/proTable/useHooks/index.tsx
 */
import React, { memo } from "react";
import type { ReactNode } from "react";

interface IProps {
	children?: ReactNode;
}
const UseHooks: React.FC<IProps> = () => {
	return <div>UseHooks</div>;
};
export default memo(UseHooks);
