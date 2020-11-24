import { connect } from "react-redux";
import { removeAll, startAddExpense,startremove } from "./action";
 import React from "react"
 import Redux from "./Addexpenses"

  const Addexpensepage=(props)=>(
     <div>
         <Redux
           onsubmit={(exp)=>{
                props.startAddExpense(exp)
                props.history.push("/dashboard")
           }}
          
         />
     </div>
 );
 const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(undefined,mapDispatchToProps)(Addexpensepage)
