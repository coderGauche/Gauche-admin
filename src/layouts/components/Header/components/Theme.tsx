/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 22:31:34
 * @FilePath: /vite-project/src/layouts/components/Header/components/Theme.tsx
 */
import { setWeakOrGray } from "@/redux/modules/global/action";
import { Divider, Drawer, Switch } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Theme = (props: any) => {
	const [visible, setVisible] = useState(false);
	const [weakOrGray, setWeakOrGray] = useState<string>(props.themeConfig.weakOrGray);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!props.themeConfig.weakOrGray) body.setAttribute("style", "");
		if (props.themeConfig.weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (props.themeConfig.weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");
		setWeakOrGray(props.themeConfig.weakOrGray);
	};

	const onChange = (checked: boolean, theme: string) => {
		if (checked) return props.setWeakOrGray(theme);
		props.setWeakOrGray("");
	};

	useEffect(() => {
		initTheme();
	}, [props.themeConfig]);

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					showDrawer();
				}}
			></i>
			<Drawer title="主题设置" closable={false} onClose={onClose} open={visible}>
				<Divider style={{ margin: "0 0 16px 0" }}>主题</Divider>
				<div className="theme-item">
					<span>黑暗模式</span>
					<Switch size="default" />
				</div>
				<div className="theme-item">
					<span>灰色模式</span>
					<Switch
						size="default"
						checked={weakOrGray === "gray"}
						onChange={e => {
							onChange(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>色弱模式</span>
					<Switch
						size="default"
						checked={weakOrGray === "weak"}
						onChange={e => {
							onChange(e, "weak");
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setWeakOrGray };
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
