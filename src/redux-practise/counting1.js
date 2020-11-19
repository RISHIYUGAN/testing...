import React from "react"
import { connect } from "react-redux";
import { Decrement, Increment } from "./actions";

class Count1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:props.count
        }
        this.handleincrease=this.handleincrease.bind(this)
        this.handledecrease=this.handledecrease.bind(this)
        this.statechange=this.statechange.bind(this)
    }
    handleincrease(){
        this.props.dispatch(Increment(this.state.count))
      }
     handledecrease(){
          this.props.dispatch(Decrement(this.state.count))
      }
      statechange(){
          if(this.state.count!==this.props.count){
          this.setState({
            count:this.props.count
          })
      }
    }
    render(){
        return(
            <div style={{border:"2px solid lightblue",paddingLeft:"45%"}}>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleincrease}>+1</button>
                <button onClick={this.handledecrease}>-1</button>
                <br/><br/><br/>
                {this.statechange()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      count:state.count
    };
  };
  
export default connect(mapStateToProps)(Count1)
