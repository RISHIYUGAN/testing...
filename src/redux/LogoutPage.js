import React from "react"
import { startLogout } from "./Auth"
import {connect} from "react-redux"

const LogoutPage=({startLogout})=>(
     <div>
         <button onClick={startLogout }>logout</button>
     </div>
)

const mapDispatchToprops=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
});

export default connect(undefined,mapDispatchToprops)(LogoutPage)