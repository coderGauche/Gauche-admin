/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:18:08
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-11 23:51:35
 * @FilePath: /vite-project/src/redux/interface/index.ts
 */
import type { SizeType } from "antd/lib/config-provider/SizeContext";

/* themeConfigProp */
export interface ThemeConfigProp {
	primary?: string;
	isDark?: boolean;
	weakOrGray?: string;
	breadcrumb?: boolean;
	tabs?: boolean;
	footer?: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize?: SizeType;
	language: string;
	themeConfig: ThemeConfigProp;
}

/* MenuState */
export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}

/* TabsState */
export interface TabsState {
	tabsActive?: string;
	tabsList?: Menu.MenuOptions[];
	type?: string;
}

/* BreadcrumbState */
export interface BreadcrumbState {
	breadcrumbList: {
		[propName: string]: any;
	};
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}
