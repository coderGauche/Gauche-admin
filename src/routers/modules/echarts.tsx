/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 23:24:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 23:25:17
 * @FilePath: /vite-project/src/routers/modules/echarts.tsx
 */
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// echarts 模块
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Echarts"
		},
		children: [
			{
				path: "/echarts/waterChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/waterChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "水型图",
					key: "waterChart"
				}
			},
			{
				path: "/echarts/columnChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/columnChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "柱状图",
					key: "columnChart"
				}
			},
			{
				path: "/echarts/lineChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/lineChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "折线图",
					key: "lineChart"
				}
			},
			{
				path: "/echarts/pieChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/pieChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "饼图",
					key: "pieChart"
				}
			},
			{
				path: "/echarts/radarChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/radarChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "雷达图",
					key: "radarChart"
				}
			},
			{
				path: "/echarts/nestedChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/nestedChart/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "嵌套环形图",
					key: "nestedChart"
				}
			}
		]
	}
];

export default formRouter;
