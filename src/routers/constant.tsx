/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 00:39:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 23:05:41
 * @FilePath: /vite-project/src/routers/constant.tsx
 */
import Layout from "@/layouts/index";
import AuthRouter from "./authRouter";
/**
 * @description: default layout
 */

export const LayoutIndex = () => (
	<AuthRouter>
		<Layout />;
	</AuthRouter>
);
