/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:12:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 17:26:00
 * @FilePath: /vite-project/src/views/home/index.tsx
 */
import welcome from "@/assets/images/welcome.png";
import "./index.less";

const Home = () => {
	return (
		<div className="home">
			<img src={welcome} alt="welcome" />
		</div>
	);
};

export default Home;
