/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:18:34
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-04-03 23:23:52
 * @FilePath: /vite-project/src/redux/index.ts
 */

import storage from "redux-persist/lib/storage";
import menu from "./modules/menu/reducer";
import tabs from "./modules/tabs/reducer";
import { breadcrumb } from "./modules/breadcrumb/reducer";
import reduxThunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import reduxPromise from "redux-promise";

// 创建reducer(拆分reducer)
const reducer = combineReducers({
	menu,
	tabs,
	breadcrumb
});

// * 持久化配置
const persistConfig = {
	key: "redux-state", // 储存的标识名
	storage: storage
	//  whitelist: ['persistReducer'] //白名单 模块参与缓存
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store//
const persistor = persistStore(store);

export { store, persistor };
