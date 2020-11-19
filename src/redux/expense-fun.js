import { connect } from "react-redux";
import { removeAll, startAddExpense,startremove } from "./action";
 import React from "react"
 import Redux from "./expenses"

  const Addexpensepage=(props)=>(
     <div>
         <Redux
           onsubmit={(exp)=>{
                props.startAddExpense(exp)
           }}
           handledelete={()=>
             props.startremove()
          }
         />
     </div>
 );
 const mapDispatchToProps = (dispatch) => ({
  startremove:()=>dispatch(startremove()),
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined,mapDispatchToProps)(Addexpensepage)
