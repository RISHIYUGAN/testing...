import { createStore,combineReducers,applyMiddleware,compose } from "redux"
import {expensesReducer} from "./reducers"
import thunk from 'redux-thunk';
import {AuthReducer} from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        Auth:AuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);
return store
};
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
//   });

// store.dispatch(addExpense({name:"rishi",section:"B2",dep:"Ece"}))
// store.dispatch(addExpense({name:"parthi",section:"B2",dep:"Ece"}))

