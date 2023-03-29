/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 11:45:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 15:50:55
 * @FilePath: /vite-project/src/routers/index.tsx
 */
import { useRoutes, Navigate } from "react-router-dom";
import React from "react";
import type { RouteObject } from "react-router-dom";
// import { RouteObject } from "@/routers/interface";
import lazyLoad from "@/routers/utils/lazyLoad";
import NotFound from "@/components/ErrorMessage/404";
import LayoutIndex from "@/layouts";

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: lazyLoad(React.lazy(() => import("@/views/login/index")))
	},
	{
		element: <LayoutIndex name="我是参数" />,
		children: [
			{
				path: "/home",
				element: lazyLoad(React.lazy(() => import("@/views/home/index")))
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
];

const Router = () => {
	const routers = useRoutes(rootRouter);
	return routers;
};

export default Router;
