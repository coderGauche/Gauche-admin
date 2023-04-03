/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 13:34:02
 * @FilePath: /vite-project/src/layouts/components/Menu/components/Logo.tsx
 */
import logo from "@/assets/images/logo.png";
import { connect } from "react-redux";

const Logo = (props: any) => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />

			{!props.isCollapse ? <h2 className="logo-text">Gauche-Admin</h2> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;

export default connect(mapStateToProps)(Logo);
