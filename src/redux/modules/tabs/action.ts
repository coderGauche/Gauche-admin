/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 17:19:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 23:59:30
 * @FilePath: /vite-project/src/redux/modules/tabs/action.ts
 */
import * as types from "@/redux/mutation-types";
export const setTabsList = (tabsList: Menu.MenuOptions[]) => ({
	type: types.SET_TABS_LIST,
	tabsList
});

export const setTabsActive = (tabsActive: string) => ({
	type: types.SET_TABS_ACTIVE,
	tabsActive
});
