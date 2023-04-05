/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 17:19:44
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-04 00:31:23
 * @FilePath: /vite-project/src/redux/modules/tabs/reducer.ts
 */
import { HOME_URL } from "@/config/config";
import { TabsState } from "@/redux/interface";
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/redux/mutation-types";

const tabsState: TabsState = {
	tabsActive: HOME_URL,
	tabsList: [{ title: "首页", path: HOME_URL }]
};

//action业务中传的参数   state默认值   draftState特殊处理的深拷贝
const tabs = (state: TabsState = tabsState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TABS_LIST:
				draftState.tabsList = action.tabsList;
				break;
			case types.SET_TABS_ACTIVE:
				draftState.tabsActive = action.tabsActive;
				break;
			default:
				return draftState;
		}
	});

export default tabs;
