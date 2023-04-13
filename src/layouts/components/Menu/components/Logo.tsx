/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:20:52
 * @FilePath: /vite-project/src/layouts/components/Menu/components/Logo.tsx
 */
import logo from "@/assets/images/logo.png";
import { connect } from "react-redux";

const Logo = (props: any) => {
	const { isCollapse } = props;
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />

			{!isCollapse ? <h2 className="logo-text">Gauche-Admin</h2> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;

export default connect(mapStateToProps)(Logo);
