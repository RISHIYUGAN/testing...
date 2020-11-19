// import React from "react"
// class Reacto extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:[]
//     }
//     this.submit=this.submit.bind(this);
//   }
//   submit(e){
//     e.preventDefault();
//    const value=e.target.elements.name.value
//    this.setState(prevstate=>{
//      return{
//      name:[...prevstate.name,<p>{value}</p>]
//      }
//    })
//    e.target.elements.name.value=""
//  }
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.submit}>
//           <input
//           type="text"
//           name="name"
//           />
//           <br/>
//           <br/>
//           <input
//           type="number"
//           name="age"
//           />
//           <br/><br/>
//           <button>submit</button>
//         </form>
//       {this.state.name.forEach((nam)=><p key={nam}>{nam}</p>)}
//       </div>
//     )
//   }
// }
// export default Reacto;

import React from "react";
import list from "./andrew2";
import Rishi from "./andrew3";
import "./andrewcss.css";
class Reacto extends React.Component {
  constructor() {
    super();
    this.state = {
      random: list,
    };
  }
  render() {
    let randomitems = this.state.random.map((ran) => (
      <Rishi key={ran.key} item={ran} />
    ));
    return <div className="flex">{randomitems}</div>;
  }
}
export default Reacto;

// import React from "react";
// class Reacto extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       visibility: false,
//       visimess: "show details",
//     };
//     this.handleclick = this.handleclick.bind(this);
//   }
//   handleclick() {
//     this.state.visibility = !this.state.visibility;
//     if (!this.state.visibility) {
//       this.setState({
//         visimess: "show details",
//       });
//     } else {
//       this.setState({
//         visimess: "hide details",
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>VISIBILITY TOGGLE</h1>
//         <button
//           disabled={!this.state.visimess && true}
//           id="btn"
//           onClick={this.handleclick}
//         >
//           {this.state.visimess}
//         </button>
//         {this.state.visibility && <p>there is some comment</p>}
//         <p>You are always right buddy</p>
//       </div>
//     );
//   }
// }
// export default Reacto;

// import React from "react"
// import "./andrewcss.scss"
// // import Modal from "react-modal"
// class Reacto extends React.Component{
//   state={
//     options:["jaga"],
//     error:undefined,
//     unknown:undefined,
//     date:[],
//     test:[[[<h1>hii</h1>],[<p>good</p>,<p>good</p>,<p>good</p>]],[[<h1>buddy</h1>],[<p>word</p>,<p>word</p>,<p>word</p>,<p>word</p>]]]
//   }
//   constructor(){
//     super()
    
//      this.handledelete=this.handledelete.bind(this) 
//      this.handlesubmit=this.handlesubmit.bind(this)
//   }
//   handledelete(optiontodelete){
//     this.setState((prevState)=>({
//             options:prevState.options.filter((option)=>{ 
//               return optiontodelete!==option
//             }) 
      
//     }))
//   }
//   handlesubmit(e){
//     e.preventDefault();
//     // const option=e.target.opt.value;
//     const date=e.target.date.value
//     const error=(()=>{
//     // if(!option){
//     //   return "Please enter a option";
//     // }
//     // else if(this.state.options.indexOf(option)>-1){
//     //   return "This option already exists";  
//     // }
//     this.setState((prevState)=>({
//       date:prevState.date.concat(date),
//       // options:prevState.options.concat(option)
//     }))
//   })
//   this.setState({
//     error:error()
//   })
//     e.target.opt.value="";
//     console.log(this.state.error)
//   }
//   render(){
//     return(
//       <div>
//         <h1>Here are your options</h1>
//     {this.state.options.map((option)=><p key={option}>{option} <button onClick={(e)=>{this.handledelete(option)}}>remove</button>{this.state.date.map((option)=><text key={option}>{option} </text>)}</p>)}
//         {this.state.error}
//         <form className="flex" onSubmit={this.handlesubmit}>
//           <input
//             type="text"
//             name="opt"    
//             className="flexinput"        
//          />
//           <input
   
//             name="date"    
//             className="flexinput"        
//          />
//         <button>Add option</button>
//         </form>
//          {/* <Modal isOpen={this.state.error}>true</Modal>  */}      
//          {/* {this.state.test.map((option)=>{option.map((opti)=>{opti.map((opt)=>{<h1 key={opt}>{opt}</h1>})})})}
//                 */}
//           {this.state.test.map((options)=><p key={options}>{options.map(opti=><div key={opti}><p>{opti.map(opt=><text key={opt}>{opt}</text>)}</p></div>)}<hr/></p>)}
//        </div>
//     )
//   }
// }
// export default Reacto

// import React from "react"
// class  Reacto extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       list:["r","i","s","h","i"]
//     }
//     this.handleclick=this.handleclick.bind(this)
//   }
//   handleclick(){
//     const list=this.state.list
//     list.splice(0,1,Math.floor(Math.random()*3))
//     this.setState({
//       list:list
//     })
//   }
//   render(){
//     return(
//       <div>
//         <text>{this.state.list}</text>
//         <button onClick={this.handleclick}>click me</button>
//       </div>
//     )
//   }
// }
// export default Reacto

