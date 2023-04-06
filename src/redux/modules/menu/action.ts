/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 17:55:36
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 22:55:06
 * @FilePath: /vite-project/src/redux/modules/menu/action.ts
 */
import { getMenuList } from "@/api/modules/login";
import * as types from "@/redux/mutation-types";
import { Dispatch } from "react";

interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}

export const updateCollapse = (isCollapse: boolean) => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

// * setMenuList
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});

export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		const result = await getMenuList();
		dispatch({
			type: types.SET_MENU_LIST,
			menuList: (result.data as Menu.MenuOptions[]) ?? []
		});
	};
};

// * redux-promise《async/await》
export const getMenuListAction = async (): Promise<MenuProps> => {
	const result = await getMenuList();
	return {
		type: types.SET_MENU_LIST,
		menuList: result.data ? result.data : []
	};
};

// * redux-promise《.then/.catch》
export const getMenuListActionPromise = (): Promise<MenuProps> => {
	return getMenuList().then(result => {
		return {
			type: types.SET_MENU_LIST,
			menuList: result.data ? result.data : []
		};
	});
};
