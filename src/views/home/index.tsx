/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:12:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 13:37:03
 * @FilePath: /vite-project/src/views/home/index.tsx
 */
import welcome from "@/assets/images/welcome01.png";
import "./index.less";

const Home = () => {
	return (
		<div className="home card">
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
