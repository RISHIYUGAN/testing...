import React from "react";
import { connect } from "react-redux";
import {startRemoveExpense} from "./action"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleclick(option){
    this.props.startRemoveExpense(option.id)
  }
  render() {
    return (
      <div>
        <p>THIS IS DASHBOARD</p>
        {this.props.expense &&
          this.props.expense.map((exp) => (
            <div key={exp.id}>
              <h1>{exp.name}</h1>
              {exp.sec}-{exp.dep}
              <p>
                <button onClick={(e)=>{this.handleclick(exp)}}>delete</button>
              </p>
              <br />
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
  startRemoveExpense:(id)=>dispatch(startRemoveExpense(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
