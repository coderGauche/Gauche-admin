/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 17:19:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 17:58:46
 * @FilePath: /vite-project/src/redux/modules/tabs/action.ts
 */
import * as types from "@/redux/mutation-types";
export const addTabs = (tabItem: Menu.MenuOptions) => ({
	type: types.ADD_TABS,
	tabItem
});

export const stetabsActive = (tabsActive: string) => ({
	type: types.SET_TABS_ACTIVE,
	tabsActive
});
