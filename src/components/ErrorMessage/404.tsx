/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:14:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 23:10:30
 * @FilePath: /vite-project/src/components/ErrorMessage/404.tsx
 */
import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import { HOME_URL } from "@/config/config";

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
