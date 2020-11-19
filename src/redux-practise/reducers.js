import { Increment, Decrement} from "./actions"

export const CountReducer=(state=0,action)=>{
    switch(action.type){
        case "Increment":
            return state+1;
        case "Decrement":
            return state-1;
        default:
             return state;
    }
}