/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:52:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-26 03:02:31
 * @FilePath: /vite-project/src/redux/modules/global/action.ts
 */
import * as types from "@/redux/mutation-types";
import { ThemeConfigProp } from "@/redux/interface/index";

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

// * setThemeConfig
export const setThemeConfig = (themeConfig: ThemeConfigProp) => ({
	type: types.SET_THEME_CONFIG,
	themeConfig
});
