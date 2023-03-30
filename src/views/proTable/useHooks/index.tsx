/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 00:36:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-31 00:54:19
 * @FilePath: /vite-project/src/views/proTable/useHooks/index.tsx
 */
import { Table } from "antd";
import React, { memo } from "react";
import type { ReactNode } from "react";
import { searchRoute } from "@/utils/util";

import "./index.less";
import { useLocation } from "react-router-dom";
import { rootRouter } from "@/routers";

interface IProps {
	children?: ReactNode;
}
const UseHooks: React.FC<IProps> = () => {
	const location = useLocation();

	const res = searchRoute(location.pathname, rootRouter);
	console.log(res);
	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		}
	];

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
	return <Table dataSource={dataSource} columns={columns} />;
};
export default memo(UseHooks);
