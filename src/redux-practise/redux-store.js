import { createStore,combineReducers } from "redux"
import {CountReducer} from "./reducers"
export const store=createStore(
  combineReducers({
      count:CountReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });