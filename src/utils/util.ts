/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 03:00:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 15:40:40
 * @FilePath: /vite-project/src/utils/util.ts
 */

/**
 * @description 获取需要展开的 subMenu  获取父级Menu  如果只有一级的话就是空的
 * @param path 当前访问地址
 * @returns {Array} 需要展开的 subMenu
 */
export const getOpenKeys = (path: string) => {
	let newStr = "";
	let newArr = [];
	let arr = path.split("/").map(i => "/" + i);
	// * arr值为['/', '/proTable', '/useComponent'] 两层的时候他就是1和2之间遍历了只有1
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i];
		newArr.push(newStr);
	}
	//最终获取的是['/proTable']
	return newArr;
};

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export const getBrowserLang = () => {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
};

/**
 * @description 判断数据类型
 * @param val 需要判断类型的数据
 * @returns {string} 数据类型
 */
export function isType(val: any) {
	if (val === null) return "null";
	if (typeof val !== "object") return typeof val;
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}

/**
 * @description 对象数组深克隆
 * @param obj 源对象
 * @returns {obj} 克隆后的对象
 */
export function deepCopy<T>(obj: any): T {
	let newObj: any;
	try {
		newObj = obj.push ? [] : {};
	} catch (error) {
		newObj = {};
	}
	for (let attr in obj) {
		if (typeof obj[attr] === "object") {
			newObj[attr] = deepCopy(obj[attr]);
		} else {
			newObj[attr] = obj[attr];
		}
	}
	return newObj;
}
