/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 14:54:07
 * @FilePath: /vite-project/src/layouts/components/Header/components/Fullscreen.tsx
 */
import { Tooltip } from "antd";

const Fullscreen = () => {
	return (
		<Tooltip placement="bottom" title={"全屏"}>
			<i className="icon-style iconfont icon-fangda"></i>
		</Tooltip>
	);
};
export default Fullscreen;
