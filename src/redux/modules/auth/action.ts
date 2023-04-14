/*
 * @Author: Gauche楽
 * @Date: 2023-04-05 23:57:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 14:07:29
 * @FilePath: /vite-project/src/redux/modules/auth/action.ts
 */
import * as types from "@/redux/mutation-types";

// * setAuthButtons
export const setAuthButtons = (authButtons: { [propName: string]: any }) => ({
	type: types.SET_AUTH_BUTTONS,
	authButtons
});

// * setAuthRouter
export const setAuthRouter = (authRouter: string[]) => ({
	type: types.SET_AUTH_ROUTER,
	authRouter
});
