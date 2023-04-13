/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 17:28:09
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 00:26:56
 * @FilePath: /vite-project/src/views/login/components/LoginFrom.tsx
 */
import md5 from "js-md5";
import { Button, Form, FormInstance, Input, message } from "antd";
import React, { useState } from "react";
import type { ReactNode } from "react";
import { Login } from "@/api/interface";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/api/modules/login";
import { HOME_URL } from "@/config/config";
import { setToken } from "@/redux/modules/global/action";
import { connect } from "react-redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { useTranslation } from "react-i18next";

interface IProps {
	children?: ReactNode;
}
const LoginForm: React.FC<IProps> = (props: any) => {
	const { t } = useTranslation();
	const { setToken, setTabsList } = props;
	const navigate = useNavigate();
	const formRef = React.useRef<FormInstance>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			const { data } = await loginApi(loginForm);
			setToken(data?.access_token);
			setTabsList([]);
			message.success("登录成功！");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
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
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button icon={<CloseCircleOutlined />} htmlType="button" onClick={onReset}>
					{t("login.reset")}
				</Button>
				<Button type="primary" loading={loading} icon={<UserOutlined />} htmlType="submit">
					{t("login.confirm")}
				</Button>
			</Form.Item>
		</Form>
	);
};

const mapDispatchToProps = { setToken, setTabsList };
export default connect(null, mapDispatchToProps)(LoginForm);
