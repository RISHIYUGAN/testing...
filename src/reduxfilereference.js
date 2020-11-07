const addExpense=({name="", age=0}={})=>({
    type: "addExpense",
    expense:{
        id:uuid(),
        name,
        age,
    }
   }
   )
   const removeExpense=((id="")=>
   ({
     type: "removeExpense",
     id
   }))
   const expensedefault=[];
   const expensesReducer=(state=expensedefault, action)=>{
       switch(action.type){
           case "addExpense":
               return [...state,action.expense]
           case "removeExpense":
               return state.filter((list)=>{
                  return list.id!==action.id
                  } )
           default:
           return state
       }
   }
   const store=createStore(combineReducers({
       expense: expensesReducer,
   }))
   store.subscribe(()=>{
       console.log(store.getState())
   })
   const one=store.dispatch(addExpense({name:"rishi",age:19}))
   const two=store.dispatch(addExpense())
   store.dispatch(removeExpense(two.expense.id))
   console.log(store.dispatch(removeExpense(one.expense.id)))