import React from "react"
import {connect } from "react-redux"
import {startLogin} from "./Auth"

 export const Loginpage=({startLogin})=>(
    <div>
        <p id="error"></p>
        <button onClick={startLogin}>login</button>
    </div>
 )


 const mapDispatchToProps=(dispatch)=>({
     startLogin: ()=>dispatch(startLogin())
 })

 export default connect(undefined,mapDispatchToProps)(Loginpage)