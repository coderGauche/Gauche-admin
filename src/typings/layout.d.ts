/*
 * @Author: Gauche楽
 * @Date: 2023-03-29 14:31:19
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 14:33:03
 * @FilePath: /vite-project/src/typings/layout.d.ts
 */
// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}
