/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:14:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 16:32:59
 * @FilePath: /vite-project/src/components/ErrorMessage/403.tsx
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";

const NotAuth = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/home");
	};
	return (
		<Result
			status="403"
			title="403"
			subTitle="Sorry, you are not authorized to access this page."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotAuth;
