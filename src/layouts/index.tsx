/*
 * @Author: Gauche楽
 * @Date: 2023-03-28 15:04:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 16:44:11
 * @FilePath: /vite-project/src/layouts/index.tsx
 */
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import LayoutTabs from "./components/Tabs";
import LayoutFooter from "./components/Footer";
import "./index.less";
import { connect } from "react-redux";

const { Sider, Content } = Layout;

const LayoutIndex = (props: any) => {
	const { pathname } = useLocation();

	return (
		// 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		<section className="container-box">
			<Sider style={{ backgroundColor: "#001529" }} trigger={null} collapsed={props.isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs>
				<Content>
					<TransitionGroup className="content">
						{/* exit：表示退出当前页面的时候是否有动画 */}
						<CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}>
							<Outlet></Outlet>
						</CSSTransition>
					</TransitionGroup>
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	);
};

// * react-redux写法(高阶组件)
// * connect具有两个参数，第一个参数是mapStateToProps，第二个参数是mapDispatchToProps
const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(LayoutIndex);
