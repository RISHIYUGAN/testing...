import React from "react"
import Yugan from "./support1"
function Rishi(){
    const date = new Date();
    var style={color:"red"}
    style.color="blue";
    return(
          
          <h1 style={style}>it is currently about {date.getHours() % 12}:{date.getMinutes()%60}</h1>
    )

}
export default Rishi 