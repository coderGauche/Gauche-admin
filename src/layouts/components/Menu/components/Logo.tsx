/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-29 23:22:42
 * @FilePath: /vite-project/src/layouts/components/Menu/components/Logo.tsx
 */
import logo from "@/assets/images/logo.png";

const Logo = () => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			<h2 className="logo-text">Gauche-Admin</h2>
		</div>
	);
};

export default Logo;
