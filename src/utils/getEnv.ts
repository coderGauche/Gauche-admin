/*
 * @Author: Gauche楽
 * @Date: 2023-03-25 00:44:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-25 01:50:39
 * @FilePath: /vite-project/src/utils/getEnv.ts
 */
// Read all environment variable configuration files to process.env
// 读取所有环境变量配置文件到process.env
export const wrapperEnv = (envConfig: Recordable) => {
	const result: any = {};
	for (const envName of Object.keys(envConfig)) {
		let realName = envConfig[envName].replace(/\\n/g, "\n");
		realName = realName === "true" ? true : realName === "false" ? false : realName;

		if (envName === "VITE_PORT") {
			realName = Number(realName);
		}
		if (envName === "VITE_PROXY") {
			try {
				realName = JSON.parse(realName);
			} catch (error) {
				console.log(error);
			}
		}
		result[envName] = realName;
		process.env[envName] = realName;
	}
	return result;
};
