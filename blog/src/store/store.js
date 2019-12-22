import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { postReducer } from "./postReducer";

const enhancer = combineReducers({
  post: postReducer
});
export const store = createStore(enhancer, devToolsEnhancer());
