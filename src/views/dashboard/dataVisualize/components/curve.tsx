/*
 * @Author: Gauche楽
 * @Date: 2023-04-14 16:23:48
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 17:07:38
 * @FilePath: /vite-project/src/views/dashboard/dataVisualize/components/curve.tsx
 */
import { useCurve } from "./useCurve";

const Curve = () => {
	const [chart] = useCurve();
	console.log(chart, "useCurve");
	return <div ref={chart} style={{ width: "100%", height: "100%" }} />;
};

export default Curve;
