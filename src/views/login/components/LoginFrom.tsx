/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 17:28:09
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-30 17:40:02
 * @FilePath: /vite-project/src/views/login/components/LoginFrom.tsx
 */
import { Button, Form, FormInstance, Input, message } from "antd";
import React, { memo } from "react";
import type { ReactNode } from "react";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface IProps {
	children?: ReactNode;
}
const LoginForm: React.FC<IProps> = () => {
	const navigate = useNavigate();
	const formRef = React.useRef<FormInstance>(null);
	const onFinish = (values: any) => {
		console.log("Success:", values);
		message.success("登录成功！");
		navigate("/home");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	const onReset = () => {
		formRef.current?.resetFields();
	};
	return (
		<Form
			ref={formRef}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
				<Input placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button icon={<CloseCircleOutlined />} htmlType="button" onClick={onReset}>
					重置
				</Button>
				<Button type="primary" icon={<UserOutlined />} htmlType="submit">
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};
export default memo(LoginForm);
