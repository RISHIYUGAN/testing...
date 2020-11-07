import React from "react"
import moment from "moment"
import { SingleDatePicker } from "react-dates"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

class Test extends React.Component{
  constructor(){
    super();
    this.state={
       count:0,
       firstname:"",
       secondname:"",
       amount:null,
       date:moment(),
       calenderfoc:false,
       checking:moment().format("D/MM/YYYY"),
      checking:"",
      test:[1,2,3],
      obj:[{
        type:"dumbels",
        count:0, 
      },
    {
      type:"pullups",
      count:9
    },
    {
      type:"pushups",
      count:10
    }]
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.onDateChange=this.onDateChange.bind(this)
    this.onFocusChange=this.onFocusChange.bind(this)
    this.datechange=this.datechange.bind(this)
    this.testclick=this.testclick.bind(this)
  }
  componentDidMount(){
    const option=JSON.parse(localStorage.getItem("rishi"))
    const option2=JSON.parse(localStorage.getItem("yugan"))
    this.setState(
     { 
      firstname:option2,
      secondname:option
    }
    )
  }
  componentDidUpdate(){
    localStorage.setItem("rishi",JSON.stringify(this.state.secondname))
    localStorage.setItem("yugan",JSON.stringify(this.state.firstname))
  }
  handleClick(e){
    var button=e.target.value;
    this.setState((prevstate)=>({
      count:prevstate.count+parseInt(button)
    }))
  }
 handleSubmit(e){
   e.preventDefault();
   const firstname=e.target.firstname.value;
   const secondname=e.target.secondname.value;
   const amount=e.target.number.value;
   if(amount.match(/^\d*(\.\d{0,2})?$/)){
   this.setState({
     firstname,
     secondname,
     amount
    })}
    e.target.firstname.value=""
    e.target.secondname.value=""
    e.target.number.value=""
 }
 onDateChange=(date)=>{
   if(date){
   this.setState(()=>({
     date
   }))
   }
  }
 onFocusChange=({ focused })=>{
   this.setState(()=>({ calenderfoc:focused}))
 }
 renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => {
  let i
  let years = []
  for(i = moment().year(); i >= moment().year() - 100; i--) {
      years.push(<option value={i} key={`year-${i}`}>{i}</option>)
  }
  return (      
      <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
              <select value={month.month()} onChange={e => onMonthSelect(month, e.target.value)}>
                  {moment.months().map((label, value) => (
                      <option value={value} key={value}>{label}</option>
                  ))}
              </select>
          </div>
          <div>
              <select value={month.year()} onChange={e => onYearSelect(month, e.target.value)}>
                  {years}
              </select>
          </div>
      </div>
  )
}
datechange(e){
  var tin=e.target.value;
  console.log(tin)
  if(tin.match(/^\d{0,1}\/\d{1,2}\/{0,1}\d{0,4}/)){
    this.setState({
      checking:tin
    })
  }
}
testclick(e,option){
  this.setState((prevState)=>({
   obj: prevState.obj.find((opt)=>
    {
      if(opt===option){
        return({...opt,count:e.target.value})
      }
    })
  }))
}
testclick(opti,e){
  const value=e.target.value
 const ind=this.state.obj.indexOf(opti)
 const replace={
   ...opti,
   count:value
 }
 const list=this.state.obj
 list.splice(ind,1,replace)
 this.setState({
  obj:list
 })
}
  render(){
    return(
      <div>
        <h1>firstName:<text style={{color:"red"}}>
         {this.state.firstname} </text></h1>
        <h1>lastName:<text style={{color:"lightblue"}}>{this.state.secondname}</text></h1>
        <h1>amount:{this.state.amount}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"  
          name="firstname"
          placeholder="firstName"
          autoFocus
          > 
          </input>
          <input
         type="text"
         name="secondname"
         placeholder="secondName"
         >
          </input>
          <input
         type="text"
         name="number"
         placeholder="number"
         >
        </input>
          <button>Submit</button>
        </form>
        <h1>{this.state.count}</h1>
        <button value={1} onClick={this.handleClick}>+1</button>
        <button value={2} onClick={this.handleClick}>+2</button>
        <SingleDatePicker
        date={this.state.date}
        onDateChange={this.onDateChange}
        focused={this.state.calenderfoc}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        renderMonthElement={this.renderMonthElement}
        />
        <br/>
        <input
        type="text"
        name="checking"
        value={this.state.checking}
        onChange={this.datechange}
        />
        {console.log(this.state.date.valueOf())}
        <br/>
        {this.state.obj.map((opt)=><div><p>{opt.type}</p><p>{opt.count}</p><p><input onChange={(e)=>{this.testclick(opt,e)}}/></p></div>)} 
      </div>
      
    )
  }
}
export default Test