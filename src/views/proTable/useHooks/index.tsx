/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:36:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 00:59:43
 * @FilePath: /vite-project/src/views/proTable/useHooks/index.tsx
 */
import { DatePicker, Table } from "antd";
import React, { useEffect } from "react";
import type { ReactNode } from "react";

import "./index.less";
import { connect } from "react-redux";

interface IProps {
	children?: ReactNode;
}
const UseHooks: React.FC<IProps> = (props: any) => {
	const { RangePicker } = DatePicker;
	useEffect(() => {
		console.log(props.authButtons, "authButtons");
	}, []);
	const columns = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address"
		}
	];
	return (
		<>
			<RangePicker /> <Table dataSource={[]} columns={columns} />
		</>
	);
};

const mapStateToProps = (state: any) => state.auth;

export default connect(mapStateToProps)(UseHooks);
