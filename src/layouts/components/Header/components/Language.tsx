/*
 * @Author: Gauche楽
 * @Date: 2023-03-30 23:42:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 14:56:24
 * @FilePath: /vite-project/src/layouts/components/Header/components/Language.tsx
 */
import { Dropdown, MenuProps, Tooltip } from "antd";

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
			<Tooltip placement="bottom" title={"语言"}>
				<i className="icon-style iconfont icon-zhongyingwen"></i>
			</Tooltip>
		</Dropdown>
	);
};
export default Language;
