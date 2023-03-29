import { Spin } from "antd";
import React, { memo } from "react";
import "./index.less";

interface IProps {
	tip?: string;
}
const Loading: React.FC<IProps> = ({ tip = "Loading…" }) => {
	return <Spin tip={tip} size="large" />;
};
export default memo(Loading);
