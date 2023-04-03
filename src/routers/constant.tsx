/*
 * @Author: Gauche楽
 * @Date: 2023-03-31 00:39:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 13:44:17
 * @FilePath: /vite-project/src/routers/constant.tsx
 */
import Layout from "@/layouts/index";
// import { createContext } from "react";
// 懒加载 Layout
// import React from "react";
// import lazyLoad from "@/routers/utils/lazyLoad";
// const Layout = lazyLoad(React.lazy(() => import("@/layouts/index")));

// export const LayoutTitleContext = createContext({});

// export const { Provider } = LayoutTitleContext;

/**
 * @description: default layout
 */
// export const LayoutIndex = (props: { title?: string } = {}) => {
// 	return (
// 		<Provider value={props}>
// 			<Layout />
// 		</Provider>
// 	);
// };

export const LayoutIndex = () => <Layout />;
