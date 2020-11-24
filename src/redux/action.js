import {v4 as uuid} from "uuid"
import database,{firebase,googleAuthProvider} from "./redux-firebase"

const addExpense=(expense)=>({
     type:"addExpense",
     expense
    
 })
export const startAddExpense=(expense={})=>{
    return (dispatch)=>{
        return database.ref("expense").push(expense).then((ref)=>
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }))
        )
    }
}

const removeAll=()=>({
    type:"removeAll",
})
export const startremove=()=>{
    return(dispatch)=>{
        return database.ref("expense").remove().then(()=>
        dispatch(removeAll()))
    }
   }
 export const removeExpense=(id)=>({
        type:"removeExpense",
        id
 })

export const startRemoveExpense=(id)=>{
      return (dispatch)=>{
          return database.ref(`expense/${id}`).remove().then(()=>
          dispatch(removeExpense(id))
          )
      }
}

export const setExpense=(expense)=>({
    type:"setExpense",
    expense
})

export const startsetExpense=()=>{
    return(dispatch)=>{
        return database.ref("expense").once("value").then((snapshot)=>{
         const expenses=[];

         snapshot.forEach((childSnapshot)=>{
             expenses.push({
                 id:childSnapshot.key,
                 ...childSnapshot.val()
             })
         })
         dispatch(setExpense(expenses))
        }
        )
    }
}
export const Updatevalue=(id,expenses)=>({
  type:"Updatevalue",
  id,
  expenses
})


export const deletevalue=(id)=>({
    type:"deletevalue",
    id
})


