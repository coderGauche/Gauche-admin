/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 22:50:23
 * @FilePath: /vite-project/src/layouts/components/Header/components/CollapseIcon.tsx
 */
import { updateCollapse } from "@/redux/modules/menu/action";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const CollapseIcon = (props: any) => {
	return (
		<div
			className="collapsed"
			onClick={() => {
				props.updateCollapse(!props.isCollapse);
			}}
		>
			{props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

const mapDispatchToProps = { updateCollapse };
const mapStateToProps = (state: any) => state.menu;

export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
