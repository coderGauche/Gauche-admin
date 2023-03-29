/*
 * @Author: Gauche楽
 * @Date: 2023-03-26 02:18:34
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-27 16:54:22
 * @FilePath: /vite-project/src/redux/index.ts
 */

import { Store, combineReducers, compose, legacy_createStore as createStore } from "redux";
import global from "./modules/global/reducer";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import { persistReducer, persistStore } from "redux-persist";

// 创建reducer(拆分reducer)
const reducer = combineReducers({
	global
});

// redux 持久化配置
const persistConfig = {
	key: "redux-state",
	storage: storage
};

const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建 store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

console.log(persistor);

export { store, persistor };
