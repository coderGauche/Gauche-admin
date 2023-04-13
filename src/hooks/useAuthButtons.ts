/*
 * @Author: Gauche楽
 * @Date: 2023-04-13 22:45:00
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 23:40:47
 * @FilePath: /vite-project/src/hooks/useAuthButtons.ts
 */
/**
 * @description 页面按钮权限
 */

import { store } from "@/redux";
import { routerArray } from "@/routers";
import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";

const useAuthButtons = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);

	return {
		BUTTONS: store.getState().auth.authButtons[route.meta!.key!] || {}
	};
};

export default useAuthButtons;
