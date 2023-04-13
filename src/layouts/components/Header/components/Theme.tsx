/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:19:34
 * @FilePath: /vite-project/src/layouts/components/Header/components/Theme.tsx
 */
import { setWeakOrGray } from "@/redux/modules/global/action";
import { FireOutlined } from "@ant-design/icons";
import { Divider, Drawer, Switch, message } from "antd";
import { useState } from "react";
import { connect } from "react-redux";

const Theme = (props: any) => {
	const { setWeakOrGray } = props;
	const [visible, setVisible] = useState(false);
	const { weakOrGray } = props.themeConfig;

	const showDrawer = () => {
		setVisible(true);
	};

	const onChange = (checked: boolean, theme: string) => {
		if (checked) return setWeakOrGray(theme);
		setWeakOrGray("");
	};
	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					showDrawer();
				}}
			></i>
			<Drawer
				title="布局设置"
				closable={false}
				onClose={() => {
					setVisible(false);
				}}
				open={visible}
				width={320}
			>
				<Divider className="divider">
					<FireOutlined />
					全局主题
				</Divider>
				<div className="theme-item">
					<span>黑暗模式</span>
					<Switch
						size="default"
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						onChange={() => {
							message.success("欢迎提交 pull request ✨");
						}}
					/>
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
