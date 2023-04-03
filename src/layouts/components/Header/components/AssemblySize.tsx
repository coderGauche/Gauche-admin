/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:40:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 14:50:55
 * @FilePath: /vite-project/src/layouts/components/Header/components/AssemblySize.tsx
 */
import { Dropdown, Tooltip, MenuProps } from "antd";
import React from "react";

const AssemblySize = () => {
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>默认</span>
		},
		{
			key: "2",
			label: <span>大型</span>
		},
		{
			key: "3",
			label: <span>小型</span>
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<Tooltip placement="bottom" title={"组件大小"}>
				<i className="icon-style iconfont icon-contentright"></i>
			</Tooltip>
		</Dropdown>
	);
};
export default AssemblySize;
