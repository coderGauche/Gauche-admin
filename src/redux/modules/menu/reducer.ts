/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 17:55:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 22:55:17
 * @FilePath: /vite-project/src/redux/modules/menu/reducer.ts
 */
import { MenuState } from "@/redux/interface";
//immer它基于写时拷贝（copy-on-write ）机制帮助开发者实现不可变状态，这是一种用于在可修改资源上实现复制操作的技术。
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/redux/mutation-types";

const menuState = {
	isCollapse: false,
	menuList: []
};

// 创建 menu-reducer
const menu = (state: MenuState = menuState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case types.SET_MENU_LIST:
				draftState.menuList = action.menuList;
				break;
			default:
				return draftState;
		}
	});

export default menu;
