/*import React from "react"
function Yugan(){
    var name="rishi"
return( 
<text>
,hiii {name}
</text>
)
}
export default Yugan*/
import React  from "react"
import "./flex.css"
function Yugan(props){
    return(
    <div className="rishi">
        <h1>{props.name}</h1>
        <p>{props.para}</p>
    </div>
    )
}
export default Yugan
