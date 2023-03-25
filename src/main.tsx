/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-26 02:02:59
 * @FilePath: /vite-project/src/main.tsx
 */
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./tailwind.css";
import "virtual:svg-icons-register";
import App from "./App";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
