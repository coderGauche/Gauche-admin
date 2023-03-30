/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 11:07:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 14:13:52
 * @FilePath: /vite-project/src/api/helper/axiosCancel.ts
 *
 * @description  存储请求连接 方便后续添加，删除，清空操作
 * Axios的CancelToken是用于取消请求的一个工具。当我们发送一个请求时，
 * 如果请求还没有完成，我们可以使用CancelToken来取消请求。CancelToken是一个函数，它返回一个对象，
 * 这个对象包含一个promise和一个函数，我们可以使用这个函数来取消请求。
 */

import axios, { AxiosRequestConfig, Canceler } from "axios";
import { isFunction } from "@/utils/is/index";
import qs from "qs";

// * 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>();

// * 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

export class AxiosCanceler {
	/**
	 * @description: 添加请求
	 * @param {Object} config
	 */
	addPending(config: AxiosRequestConfig) {
		// * 在请求开始前，对之前的请求做检查取消操作
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.has(url)) {
					// 如果 pending 中不存在当前请求，则添加进去
					pendingMap.set(url, cancel);
				}
			});
	}

	/**
	 * @description: 移除请求
	 * @param {Object} config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingMap.has(url)) {
			// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}

	/**
	 * @description: 清空所有pending
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * @description: 重置
	 */
	reset(): void {
		pendingMap = new Map<string, Canceler>();
	}
}
