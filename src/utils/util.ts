/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 03:00:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-26 03:00:28
 * @FilePath: /vite-project/src/utils/util.ts
 */
/**
 * @description 获取浏览器默认语言
 * @return string
 */
export const getBrowserLang = () => {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
};
