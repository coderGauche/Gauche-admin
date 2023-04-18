/*
 * @Author: Gauche楽
 * @Date: 2023-04-18 11:58:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:49:34
 * @FilePath: /vite-project/src/components/SwitchDark/index.tsx
 */
import { Switch } from "antd";
import { connect } from "react-redux";
import { setThemeConfig } from "@/redux/modules/global/action";

const SwitchDark = (props: any) => {
	const { setThemeConfig, themeConfig } = props;
	const onChange = (checked: boolean) => {
		setThemeConfig({ ...themeConfig, isDark: checked });
	};

	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setThemeConfig };
export default connect(mapStateToProps, mapDispatchToProps)(SwitchDark);
