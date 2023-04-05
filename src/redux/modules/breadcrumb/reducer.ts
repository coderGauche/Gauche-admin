import { BreadcrumbState } from "@/redux/interface";
import produce from "immer";
import { AnyAction } from "redux";
import * as types from "@/redux/mutation-types";

const breadcrumbState: BreadcrumbState = {
	breadcrumbList: {}
};

export const breadcrumb = (state: BreadcrumbState = breadcrumbState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_BREADCRUMB_LIST:
				draftState.breadcrumbList = action.breadcrumbList;
				break;
			default:
				return draftState;
		}
	});
