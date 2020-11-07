import React from "react"
/*function Rishi(){
     return(
        <div>
            <input className="yugan"   type="checkbox"/>
            <p className="yugan">placeholders can text here</p>

            <input className="yugan" type="checkbox"/>
            <p className="yugan">placeholders can text here</p>
            <input  className="yugan" type="checkbox"/>
            <p className="yugan">placeholders can text here</p>
            <input  className="yugan" type="checkbox"/>
            <p className="yugan">placeholders can text here</p>
        </div>
    )
}
export default Rishi*/
import Yugan from  "./support1"
import "./flex.css"
function Rishi(){
    return(
        <div className="rap">
         <Yugan 
         name="Box One"
         para="this is the box-1"
         />
         <Yugan 
         name="Box Two"
         para="this is the box-2"
         />
         <Yugan 
         name="Box Three"
         para="this is the box-2"
         />      
       </div>
    )
}
export default Rishi;
  