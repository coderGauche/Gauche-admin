/*
 * @Author: Gauche楽
 * @Date: 2023-03-29 16:09:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 16:05:43
 * @FilePath: /vite-project/src/config/serviceLoading.tsx
 */
import Loading from "@/components/Loading";
import ReactDOM from "react-dom/client";

// 创建请求计数   needLoadingRequestCount只有0/1
let needLoadingRequestCount = 0;

// 显示loading
export const showFullScreenLoading = () => {
	// 判断如果needLoadingRequestCount为0的话 挂载到全局上
	if (needLoadingRequestCount === 0) {
		//创建div节点
		let dom = document.createElement("div");
		//给节点个id属性
		dom.setAttribute("id", "loading");
		//插入全局body中
		document.body.appendChild(dom);
		//挂载在reactdom的render上
		ReactDOM.createRoot(dom).render(<Loading />);
	}
	needLoadingRequestCount++;
};

// 隐藏loading
export const tryHideFullScreenLoading = () => {
	// 判断 needLoadingRequestCount 为0或者小于零的情况证明loading不存在无需隐藏
	if (needLoadingRequestCount <= 0) return;
	// 其他情况needLoadingRequestCount肯定有值 需要--
	needLoadingRequestCount--;
	// 如果needLoadingRequestCount;等于0删掉loading
	if (needLoadingRequestCount === 0) {
		document.body.removeChild(document.getElementById("loading") as HTMLElement);
	}
};
