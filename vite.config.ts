/*
 * @Author: Gauche楽
 * @Date: 2023-03-24 15:09:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-25 02:45:53
 * @FilePath: /vite-project/vite.config.ts
 */
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
//Gzip 是一种压缩算法，在网络传输中使用非常普遍。随便打开一个网页，都使用了 gzip 压缩
//Vite 社区插件中有一个 vite-plugin-compression，可以用来做 gzip 压缩
import viteCompression from "vite-plugin-compression";
import { wrapperEnv } from "./src/utils/getEnv";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import eslintPlugin from "vite-plugin-eslint";
import { visualizer } from "rollup-plugin-visualizer";
const baseUrl = "react-admin-vite-antd5";

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv): UserConfig => {
	const env = loadEnv(config.mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	return {
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * 使用 svg 图标
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * 是否生成包预览
			viteEnv.VITE_REPORT && visualizer(),
			// * gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				})
		],
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			open: viteEnv.VITE_OPEN,
			port: viteEnv.VITE_PORT,
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45",
					secure: false,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		//所有预处理器选项还支持 additionalData 选项，可以用于为每个样式内容注入额外代码。
		css: {
			preprocessorOptions: {
				less: {
					// modifyVars: {
					// 	"primary-color": "#1DA57A",
					// },
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		base: config.mode === "development" ? "/" : `/${baseUrl}/`,
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		build: {
			// outDir: baseUrl,
			outDir: "dist",
			minify: "esbuild",
			rollupOptions: {
				output: {
					chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
					entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
					assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
					manualChunks(id: any) {
						if (id.includes("node_modules")) {
							return id.toString().split("node_modules/")[1].split("/")[0].toString();
						}
					}
				}
			}
		}
	};
});
