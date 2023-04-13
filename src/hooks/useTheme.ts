/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:17:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:00:37
 * @FilePath: /vite-project/src/hooks/useTheme.ts
 */
// import defaultTheme from "@/styles/theme/theme-default.less";
// import darkTheme from "@/styles/theme/theme-dark.less";

/**
 * @description 全局主题设置
 * */
const useTheme = (props: any) => {
	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!props.themeConfig.weakOrGray) body.setAttribute("style", "");
		if (props.themeConfig.weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (props.themeConfig.weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");
		props.setWeakOrGray(props.themeConfig.weakOrGray);
	};
	initTheme();
	return {
		initTheme
	};
};

export default useTheme;
