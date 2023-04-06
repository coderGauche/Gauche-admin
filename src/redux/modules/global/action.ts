/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:52:01
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-05 23:52:41
 * @FilePath: /vite-project/src/redux/modules/global/action.ts
 */
import * as types from "@/redux/mutation-types";

// * setToken
export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});
