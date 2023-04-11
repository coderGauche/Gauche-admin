/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-12 00:54:13
 * @FilePath: /vite-project/src/layouts/components/Header/components/Language.tsx
 */
import { Dropdown, MenuProps } from "antd";

const Language = () => {
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>简体中文</span>
		},
		{
			key: "2",
			label: <span>English</span>
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};
export default Language;
