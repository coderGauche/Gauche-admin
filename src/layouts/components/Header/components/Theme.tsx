/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 00:54:46
 * @FilePath: /vite-project/src/layouts/components/Header/components/Theme.tsx
 */
import { Drawer } from "antd";
import { useState } from "react";

const Theme = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					showDrawer();
				}}
			></i>
			<Drawer title="主题设置" closable={false} onClose={onClose} open={visible}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	);
};
export default Theme;
