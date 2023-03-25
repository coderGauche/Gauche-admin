/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-26 01:41:38
 * @FilePath: /vite-project/src/main.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./tailwind.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>,
);
