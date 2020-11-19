
const expensesReducer=(state=[],action)=>{
    switch(action.type){
        case "addExpense":
            console.log(state)
            return [...state,action.expense];
        
        case "removeAll":
            return state=[];

        case "removeExpense":
              return state.filter((exp)=>{
                return exp.id!==action.id
            }
            );

        case "setExpense":
            return action.expense;


        default:
        return state;
    }
}
export {expensesReducer};