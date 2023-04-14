/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 23:24:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 16:04:16
 * @FilePath: /vite-project/src/views/echarts/waterChart/index.tsx
 */
import * as echarts from "echarts";
import "./index.less";
import { useEffect, useRef } from "react";
import "echarts-liquidfill";

const WaterChart = () => {
	const echartsRef = useRef<HTMLDivElement>(null);
	let myChart: echarts.EChartsType;
	let value = 0.5;
	let data = [value, value, value];
	let option: echarts.EChartsCoreOption = {
		title: [
			{
				text: "预约量",
				x: "25%",
				y: 30,
				textAlign: "center",
				textStyle: {
					color: "#a1a1a1",
					fontSize: 16,
					fontFamily: "Microsoft Yahei",
					fontWeight: "100",
					textAlign: "center"
				}
			},
			{
				text: "实时客流量",
				x: "75%",
				y: 30,
				textAlign: "center",
				textStyle: {
					color: "#a1a1a1",
					fontSize: 16,
					fontFamily: "Microsoft Yahei",
					fontWeight: "100",
					textAlign: "center"
				}
			},
			{
				text: (value * 100).toFixed(0) + "%",
				left: "25%",
				top: "38%",
				textAlign: "center",
				textStyle: {
					fontSize: "50",
					fontWeight: "300",
					color: "#a06a0a",
					textAlign: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#fff",
					textShadowBlur: "0",
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			},
			{
				text: (value * 100).toFixed(0) + "%",
				left: "75%",
				top: "38%",
				textAlign: "center",
				textStyle: {
					fontSize: "50",
					fontWeight: "300",
					color: "#02456d",
					textAlign: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#fff",
					textShadowBlur: "0",
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			}
		],
		series: [
			{
				type: "liquidFill",
				radius: "50%",
				z: 6,
				center: ["25%", "50%"],
				color: [
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: "rgba(251, 173, 23, 0)"
							},
							{
								offset: 0.5,
								color: "rgba(251, 173, 23, .2)"
							},
							{
								offset: 0,
								color: "rgba(251, 173, 23, 1)"
							}
						],
						globalCoord: false
					}
				],
				data: data,
				backgroundStyle: {
					borderWidth: 1,
					color: "transparent"
				},
				label: {
					formatter: ""
				},
				outline: {
					show: true,
					itemStyle: {
						borderWidth: 0
					},
					borderDistance: 0
				}
			},
			{
				name: "第二层白边",
				type: "pie",
				z: 3,
				radius: ["0%", "55%"],
				center: ["25%", "50%"],
				emphasis: false,
				itemStyle: {
					label: {
						show: false
					}
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: "#fefefe"
								},
								{
									offset: 1,
									color: "#e7e8ea"
								}
							])
						}
					},
					{
						value: 0,
						itemStyle: {
							color: "transparent"
						}
					}
				]
			},
			{
				name: "最外绿边",
				type: "pie",
				z: 1,
				radius: ["0%", "58%"],
				center: ["25%", "50%"],
				emphasis: false,
				itemStyle: {
					label: {
						show: false
					}
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: "#fdc56e"
						}
					},
					{
						value: 0,
						itemStyle: {
							color: "transparent"
						}
					}
				]
			},
			{
				type: "liquidFill",
				radius: "50%",
				z: 6,
				center: ["75%", "50%"],
				color: ["#c1dce7", "#90d3f0", "#009bdb"],
				data: [0.6, { value: 0.5, direction: "left" }, 0.4, 0.3],
				backgroundStyle: {
					borderWidth: 1,
					color: "transparent"
				},
				label: {
					formatter: ""
				},
				outline: {
					show: true,
					itemStyle: {
						borderWidth: 0
					},
					borderDistance: 0
				}
			},
			{
				name: "第二层白边",
				type: "pie",
				z: 3,
				radius: ["0%", "55%"],
				center: ["75%", "50%"],
				emphasis: false,
				itemStyle: {
					label: {
						show: false
					}
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: "#fefefe"
								},
								{
									offset: 1,
									color: "#e7e8ea"
								}
							])
						}
					},
					{
						value: 0,
						itemStyle: {
							color: "transparent"
						}
					}
				]
			},
			{
				name: "最外蓝边",
				type: "pie",
				z: 1,
				radius: ["0%", "58%"],
				center: ["75%", "50%"],
				emphasis: false,
				itemStyle: {
					label: {
						show: false
					}
				},
				data: [
					{
						value: 100,
						itemStyle: {
							color: "#07a2e3"
						}
					},
					{
						value: 0,
						itemStyle: {
							color: "transparent"
						}
					}
				]
			}
		]
	};

	const setEcharts = () => {
		option && myChart.setOption(option);
	};

	useEffect(() => {
		//创建echarts实例，返回echarts实例，不能在单个容器中创建多个echarts实例
		myChart = echarts.init(echartsRef.current as HTMLDivElement);
		// 设置图表实例的配置项和数据
		const echartsResize = () => {
			myChart && myChart.resize();
		};
		window.addEventListener("resize", echartsResize, false);

		setEcharts();
		//组件卸载
		return () => {
			window.removeEventListener("resize", echartsResize);
			// myChart.dispose() 销毁实例。实例销毁后无法再被使用
			myChart && myChart.dispose();
		};
	});

	// 只判断数据的变化来动态setEcharts
	useEffect(() => {
		setEcharts();
	}, [value]);

	return <div ref={echartsRef} className="content-box"></div>;
};

export default WaterChart;
