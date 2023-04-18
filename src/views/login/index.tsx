/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 11:46:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:38:35
 * @FilePath: /vite-project/src/views/login/index.tsx
 */
import LoginForm from "./components/LoginFrom";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import "./index.less";

const Login = () => {
	return (
		<div className="login-container">
			<SwitchDark />
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Gauche-Admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
