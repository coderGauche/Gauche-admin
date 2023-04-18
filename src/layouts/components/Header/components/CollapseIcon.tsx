/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:10:26
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-18 14:42:17
 * @FilePath: /vite-project/src/layouts/components/Header/components/CollapseIcon.tsx
 */
import { updateCollapse } from "@/redux/modules/menu/action";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const CollapseIcon = (props: any) => {
	const { isCollapse, updateCollapse } = props;
	return (
		<div
			className="collapsed"
			onClick={() => {
				updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

const mapDispatchToProps = { updateCollapse };
const mapStateToProps = (state: any) => state.menu;

export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
