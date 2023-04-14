/*
 * @Author: Gauche楽
 * @Date: 2023-04-14 14:41:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 17:36:59
 * @FilePath: /vite-project/src/hooks/useEcharts.ts
 */
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} data 目前只针对于次Gauche-admin里一些data都是写死在options 所以data为可选 根据项目自行修改即可
 * @param {Object} options 绘制Echarts的参数(必传)
 * @return void
 * */

export const useEcharts = (options: echarts.EChartsCoreOption, data?: any) => {
	const myChart = useRef<echarts.EChartsType>();
	const echartsRef = useRef<HTMLDivElement>(null);

	const echartsResize = () => {
		echartsRef && myChart?.current?.resize();
	};

	useEffect(() => {
		if (data?.length !== 0) {
			myChart?.current?.setOption(options);
		}
	}, [data]);

	useEffect(() => {
		if (echartsRef?.current) {
			myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
		}
		myChart?.current?.setOption(options);
		window.addEventListener("resize", echartsResize, false);
		return () => {
			window.removeEventListener("resize", echartsResize);
			myChart?.current?.dispose();
		};
	}, []);

	return [echartsRef];
};
