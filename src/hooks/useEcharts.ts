/*
 * @Author: Gauche楽
 * @Date: 2023-04-14 14:41:45
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 14:57:52
 * @FilePath: /vite-project/src/hooks/useEcharts.ts
 */
import * as echarts from "echarts";
/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} myChart Echarts实例(必传)
 * @param {Object} options 绘制Echarts的参数(必传)
 * @return void
 * */

const useEcharts = (myChart: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	if (options && typeof options === "object") {
		myChart.setOption(options);
	}

	const echartsResize = () => {
		myChart && myChart.resize(); //自适应调整
	};
	//添加自适应
	const addEvent = () => {
		window.addEventListener("resize", echartsResize, false);
	};

	addEvent();

	//移除自适应
	const deleteEvent = () => {
		window.removeEventListener("resize", echartsResize);
	};

	return {
		deleteEvent
	};
};

export default useEcharts;
