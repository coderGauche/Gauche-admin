/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 17:19:44
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 17:54:14
 * @FilePath: /vite-project/src/redux/modules/tabs/reducer.ts
 */
import { HOME_URL } from "@/config/config";
import { TabsState } from "@/redux/interface";
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/redux/mutation-types";

const tabsState: TabsState = {
	// tabsActive 其实没啥用，使用 pathname 就可以了
	tabsActive: HOME_URL,
	tabsList: [
		{
			title: "首页",
			path: HOME_URL
		}
	]
};

const tabs = (state: TabsState = tabsState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.ADD_TABS:
				if (draftState.tabsList.every(item => item.path !== action.tabItem.path)) {
					draftState.tabsList.push(action.tabItem);
				}
				break;
			case types.SET_TABS_ACTIVE:
				draftState.tabsActive = action.tabsActive;
				break;
			default:
				return draftState;
		}
	});

export default tabs;
