/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 23:24:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 15:09:40
 * @FilePath: /vite-project/src/views/echarts/pieChart/index.tsx
 */
import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import useEcharts from "@/hooks/useEcharts";

const PieChart = () => {
	const echartsRef = useRef<HTMLDivElement>(null);
	let option: echarts.EChartsOption = {
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			left: "center",
			top: "bottom",
			data: ["rose 1", "rose 2", "rose 3", "rose 4", "rose 5", "rose 6", "rose 7", "rose 8"],
			textStyle: {
				color: "#a1a1a1"
			}
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: "Radius Mode",
				type: "pie",
				radius: [60, 280],
				center: ["50%", "50%"],
				roseType: "radius",
				itemStyle: {
					borderRadius: 5
				},
				label: {
					show: true
				},
				emphasis: {
					label: {
						show: true
					}
				},
				data: [
					{ value: 40, name: "rose 1" },
					{ value: 33, name: "rose 2" },
					{ value: 28, name: "rose 3" },
					{ value: 22, name: "rose 4" },
					{ value: 20, name: "rose 5" },
					{ value: 15, name: "rose 6" },
					{ value: 12, name: "rose 7" },
					{ value: 10, name: "rose 8" }
				]
			}
		]
	};

	useEffect(() => {
		const myChart: echarts.EChartsType = echarts.init(echartsRef.current as HTMLDivElement);
		useEcharts(myChart, option);
		return () => {
			myChart && myChart.dispose();
		};
	}, []);

	return <div ref={echartsRef} className="content-box"></div>;
};

export default PieChart;
