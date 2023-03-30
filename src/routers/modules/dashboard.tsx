/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 00:00:16
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-31 00:39:10
 * @FilePath: /vite-project/src/routers/modules/dashboard.tsx
 */
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		path: "/dashboard",
		element: <LayoutIndex />,
		meta: {
			title: "Dashboard"
		},
		children: [
			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "数据可视化",
					key: "dataVisualize"
				}
			},
			{
				path: "/dashboard/embedded",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/embedded"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "内嵌页面",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
