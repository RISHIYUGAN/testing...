import React from "react";
import { connect } from "react-redux";
import {startremove,startRemoveExpense} from "./action"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleclick(option){
    this.props.startRemoveExpense(option.id)
  }
  handledelete(){
    this.props.startremove()
 }
  render() {
    return (
      <div>
        <p>THIS IS DASHBOARD</p>
        <button onClick={(e)=>{this.handledelete()}}>delete all</button>
        {console.log(this.props.expense)}
        {this.props.expense &&
          this.props.expense.map((exp) => (
            <div key={exp.id}>
              <h1>{exp.name}</h1>
              {exp.sec}-{exp.dep}
              <p>
                <button onClick={(e)=>{this.handleclick(exp)}}>delete</button>
              </p>
              <br/>
            </div>
          ))} 
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.expenses,
});
const mapDispatchToProps=(dispatch)=>({
  startremove:()=>dispatch(startremove()),
  startRemoveExpense:(id)=>dispatch(startRemoveExpense(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
