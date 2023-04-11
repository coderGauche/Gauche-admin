/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 23:15:54
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 00:36:18
 * @FilePath: /vite-project/src/config/nprogress.ts
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
	easing: "ease", // 动画方式
	speed: 500, // 递增进度条的速度
	showSpinner: true, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3 // 初始化时的最小百分比
});

export default NProgress;
