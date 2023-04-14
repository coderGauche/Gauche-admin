/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 22:36:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 14:07:36
 * @FilePath: /vite-project/src/redux/modules/breadcrumb/action.ts
 */
import * as types from "@/redux/mutation-types";
export const setBreadcrumbList = (breadcrumbList: { [propName: string]: any }) => ({
	type: types.SET_BREADCRUMB_LIST,
	breadcrumbList
});
