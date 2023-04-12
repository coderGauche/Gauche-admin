/*
 * @Author: Gauche楽
 * @Date: 2023-03-25 00:46:40
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 22:47:57
 * @FilePath: /vite-project/src/typings/global.d.ts
 */
// * Vite
declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_GLOB_APP_TITLE: string;
	VITE_DROP_CONSOLE: boolean;
	VITE_PROXY_URL: string;
	VITE_BUILD_GZIP: boolean;
	VITE_REPORT: boolean;
}

// * Dropdown MenuInfo
declare interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
