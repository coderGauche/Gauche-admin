/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:17:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:23:20
 * @FilePath: /vite-project/src/hooks/useTheme.ts
 */
import defaultTheme from "../styles/theme/theme-default.less?inline";
import darkTheme from "../styles/theme/theme-dark.less?inline";
import { ThemeConfigProp } from "@/redux/interface";

/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "theme") {
					getStyle[i].remove();
				}
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "theme";
		console.log(isDark);
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
