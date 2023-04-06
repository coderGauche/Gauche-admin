/*
 * @Author: Gauche楽
 * @Date: 2023-04-06 00:05:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-06 00:13:14
 * @FilePath: /vite-project/src/routers/routerGurad.ts
 */
import { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import guard from "./utils/guard";
// import { RouteObject } from "./interface";

export const RouterGuard = ({ routes }: any) => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		guard(location, navigate, routes);
	});
	const Router = useRoutes(routes);

	return Router;
};
