/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 17:19:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 22:48:13
 * @FilePath: /vite-project/src/redux/modules/tabs/action.ts
 */
import { TabsState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";
export const setTabsList = (tabsList: Menu.MenuOptions[]): TabsState => ({
	// export const setTabsList = <T>(tabsList:T) => ({
	type: types.SET_TABS_LIST,
	tabsList
});

export const setTabsActive = (tabsActive: string) => ({
	type: types.SET_TABS_ACTIVE,
	tabsActive
});

// type setTabsListType = ReturnType<typeof setTabsList>
// type setTabsActiveType = Omit<ReturnType<typeof setTabsActive>, "type">;

// export interface tabsPropsFromDispatch {
// 	setTabsList?: () => setTabsListType;
// 	setTabsActive?: () => ReturnType<typeof setTabsActive>;
// }
