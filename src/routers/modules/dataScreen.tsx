/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 00:00:16
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-17 23:46:55
 * @FilePath: /vite-project/src/routers/modules/dataScreen.tsx
 */
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		path: "/dataScreen/index",
		element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index"))),
		meta: {
			requiresAuth: true,
			title: "数据大屏",
			key: "dataScreen"
		}
	}
];

export default dataScreenRouter;
