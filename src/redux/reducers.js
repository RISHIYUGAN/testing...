
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
            console.log(state)
            return action.expense
           
      case "Updatevalue":
      return state.map((exp)=>
        {
          if(exp.id===action.id){
              console.log(state)
              return({
                  ...exp,
                  ...action.expenses
              }
              )
          }
          else {
              return exp
          }

        })
        case "deletevalue":
            return state.filter((exp)=>{
                return exp.id!==action.id
            }
            );
        default:
        return state;
    }
}
export {expensesReducer};


export const AuthReducer=(state={},action)=>{
    switch(action.type){
        case "Login":
            return {
               uid:action.uid
            }

        case "Logout":
            return {};

        default :
        return state;
    }

}