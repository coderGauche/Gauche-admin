/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:51:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 09:57:05
 * @FilePath: /vite-project/src/redux/modules/global/reducer.ts
 */

import { GlobalState } from "@/redux/interface";
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/redux/mutation-types";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		// 默认 primary 主题颜色
		primary: "#1890ff",
		// 是否开启深色模式
		isDark: false
	}
};

const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TOKEN:
				draftState.token = action.token;
				break;
			default:
				return draftState;
		}
	});
export default global;
