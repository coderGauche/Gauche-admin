/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:14:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 16:32:54
 * @FilePath: /vite-project/src/components/ErrorMessage/500.tsx
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/home");
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
