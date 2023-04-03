/*
 * @Author: Gauche楽
 * @Date: 2023-04-03 13:41:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 13:41:19
 * @FilePath: /vite-project/src/redux/util/createReducer.ts
 */
import produce from "immer";
import { ActionFromReducer } from "redux";

export const createReducer = <State, Payload>(
	cases: { [key: string]: (s: State, action: ActionFromReducer<Payload>) => State | any } = {},
	defaultState: State
) => {
	return (state = defaultState, action: ActionFromReducer<Payload>) =>
		produce(state, (draft: State) => {
			if (action && action.type && cases[action.type] instanceof Function) {
				cases[action.type](draft, action);
			}
		});
};
