import React from "react";
import {store} from "./redux-store"


class Redux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      section: "",
      dep: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handlesubmit=(e)=>{
       e.preventDefault();
       this.props.onsubmit(
           {
               name:this.state.name,
               sec:this.state.section,
               dep:this.state.dep
           }
       )
       this.setState({
        name:"",
        dep:"",
        section:""
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            name="section"
            placeholder="sec"
            onChange={this.handleChange}
            value={this.state.section}
          />
          <input
            type="text"
            name="dep"
            placeholder="dep"
            onChange={this.handleChange}
            value={this.state.dep}
          />
          <button>submit</button>
        </form>
        <button onClick={this.props.handledelete}>delete all</button>
      </div>
    );
  }
}
export default Redux;
