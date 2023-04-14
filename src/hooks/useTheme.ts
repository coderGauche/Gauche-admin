/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:17:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 14:04:56
 * @FilePath: /vite-project/src/hooks/useTheme.ts
 */
// import defaultTheme from "@/styles/theme/theme-default.less";
// import darkTheme from "@/styles/theme/theme-dark.less";

/**
 * @description 全局主题设置
 * */
const useTheme = (weakOrGray: string) => {
	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");
	};
	initTheme();
	return {
		initTheme
	};
};

export default useTheme;
