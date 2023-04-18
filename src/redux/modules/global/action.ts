/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:52:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:52:07
 * @FilePath: /vite-project/src/redux/modules/global/action.ts
 */
import { ThemeConfigProp } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

// * setToken
export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});

// * setAssemblySize
export const setAssemblySize = (assemblySize: string) => ({
	type: types.SET_ASSEMBLY_SIZE,
	assemblySize
});

// * setLanguage
export const setLanguage = (language: string) => ({
	type: types.SET_LANGUAGE,
	language
});

// * setWeakOrGray
// export const setWeakOrGray = (weakOrGray: string) => ({
// 	type: types.SET_WEAK_OR_GRAY,
// 	weakOrGray
// });

// * setDark
export const setDark = (isDark: boolean) => ({
	type: types.SET_DARK,
	isDark
});

// * setThemeConfig
export const setThemeConfig = (themeConfig: ThemeConfigProp) => ({
	type: types.SET_THEME_CONFIG,
	themeConfig
});
