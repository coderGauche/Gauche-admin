/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:40:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 22:48:04
 * @FilePath: /vite-project/src/layouts/components/Header/components/AssemblySize.tsx
 */
import { setAssemblySize } from "@/redux/modules/global/action";
import { Dropdown, MenuProps } from "antd";
import React from "react";
import { connect } from "react-redux";

const AssemblySize = (props: any) => {
	// 切换组件大小
	const onClick = (e: MenuInfo) => {
		props.setAssemblySize(e.key);
	};
	const items: MenuProps["items"] = [
		{
			key: "middle",
			disabled: props.assemblySize == "middle",
			label: <span>默认</span>,
			onClick
		},
		{
			disabled: props.assemblySize == "large",
			key: "large",
			label: <span>大型</span>,
			onClick
		},
		{
			disabled: props.assemblySize == "small",
			key: "small",
			label: <span>小型</span>,
			onClick
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-contentright"></i>
		</Dropdown>
	);
};
const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
