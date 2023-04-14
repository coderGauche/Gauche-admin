/*
 * @Author: Gauche楽
 * @Date: 2023-04-14 16:23:57
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-14 17:07:32
 * @FilePath: /vite-project/src/views/dashboard/dataVisualize/components/pie.tsx
 */
import { usePie } from "./usePie";

const Curve = () => {
	const [chart] = usePie();
	return <div ref={chart} style={{ width: "100%", height: "100%" }} />;
};

export default Curve;
