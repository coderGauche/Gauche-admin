/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:14:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 23:10:40
 * @FilePath: /vite-project/src/components/ErrorMessage/500.tsx
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import { HOME_URL } from "@/config/config";

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="500"
			title="500"
			subTitle="Sorry, something went wrong."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotNetwork;
