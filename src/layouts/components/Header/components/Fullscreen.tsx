/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 22:58:47
 * @FilePath: /vite-project/src/layouts/components/Header/components/Fullscreen.tsx
 */
import { message } from "antd";
import { useEffect, useState } from "react";
import screenfull from "screenfull";
const Fullscreen = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(screenfull.isFullscreen);

	useEffect(() => {
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) setFullScreen(true);
			else setFullScreen(false);
			return () => screenfull.off("change", () => {});
		});
	}, []);

	const handleFullScreen = () => {
		if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
		screenfull.toggle();
	};

	return (
		<i className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")} onClick={handleFullScreen}></i>
	);
};
export default Fullscreen;
