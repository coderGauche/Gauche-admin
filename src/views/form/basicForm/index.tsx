/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 23:25:28
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 22:38:21
 * @FilePath: /vite-project/src/views/form/basicForm/index.tsx
 */
import { Button, Form, Input, Select, Space, message } from "antd";
import "./index.less";

const BasicForm = () => {
	const { Option } = Select;
	const [form] = Form.useForm();

	const onGenderChange = (value: string) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: "Hi, man!" });
				return;
			case "female":
				form.setFieldsValue({ note: "Hi, lady!" });
				return;
			case "other":
				form.setFieldsValue({ note: "Hi there!" });
		}
	};

	const onFinish = (values: any) => {
		message.success("提交的数据为 : " + JSON.stringify(values));
		console.log(JSON.stringify(values));
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			user: "mark",
			note: "Hello world!",
			gender: "male"
		});
	};

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item name="user" label="User">
				<Input placeholder="Please enter a user" />
			</Form.Item>
			<Form.Item name="note" label="Note">
				<Input placeholder="Please enter a user note" />
			</Form.Item>
			<Form.Item name="gender" label="Gender">
				<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
					<Option value="male">male</Option>
					<Option value="female">female</Option>
					<Option value="other">other</Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Space>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Reset
					</Button>
					<Button type="link" htmlType="button" onClick={onFill}>
						Fill form
					</Button>{" "}
				</Space>
			</Form.Item>
		</Form>
	);
};

export default BasicForm;
