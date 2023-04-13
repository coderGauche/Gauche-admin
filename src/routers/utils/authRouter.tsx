/*
 * @Author: Gauche楽
 * @Date: 2023-04-05 23:35:56
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-13 23:48:51
 * @FilePath: /vite-project/src/routers/utils/authRouter.tsx
 */

import { searchRoute } from "@/utils/util";
// import { RouteObject } from "@/routers/interface";
import { store } from "@/redux";
import { Navigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { rootRouter } from "@/routers/index";
import { AxiosCanceler } from "@/api/helper/axiosCancel";

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由权限组件
 * */

// const guard = (location: Location, navigate: NavigateFunction, routes: RouteObject[]) => {
// 	const { pathname } = location; //当前路由的路径（key）
// 	const route = searchRoute(pathname, routes); //当前路由全部信息
// 	//判断路由是否需要访问权限
// 	if (!route.meta?.requiresAuth) return;
// 	//判断是否有token
// 	const token = store.getState().global.token;
// 	if (!token) return navigate("/login");
// 	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
// 	const dynamicRouter = store.getState().auth.authRouter;
// 	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
// 	const staticRouter = [HOME_URL, "/403"];
// 	const routerList = dynamicRouter.concat(staticRouter);
// 	// * 如果访问的地址没有在路由表中重定向到403页面
// 	if (routerList.indexOf(pathname) == -1) return navigate("/403");
// };

const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = location; //当前路由的路径（key）
	const route = searchRoute(pathname, rootRouter); //当前路由全部信息
	// * 在跳转路由之前，清除所有的请求
	axiosCanceler.removeAllPending();
	// 	//判断路由是否需要访问权限
	if (!route.meta?.requiresAuth) return props.children;
	//判断是否有token
	const token = store.getState().global.token;
	if (!token) return <Navigate to="/login" replace />;
	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	const dynamicRouter = store.getState().auth.authRouter;
	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);
	// * 如果访问的地址没有在路由表中重定向到403页面
	if (routerList.indexOf(pathname) == -1) return <Navigate to="/403" />;
	// * 当前账号有权限返回 Router，正常访问页面
	return props.children;
};

export default AuthRouter;
