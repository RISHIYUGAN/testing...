import { NavLink } from "react-router-dom"
import React from "react"
import Logout from "./LogoutPage"


export const Header=()=>(
    <div>
        <h1>EXPENSING...</h1>
        <NavLink to="/dashboard" activeClassName="isactive">DashBoard</NavLink>
        &nbsp;&nbsp;
        <NavLink to="/AddExpense" activeClassName="isactive">AddExpense</NavLink>
        &nbsp;&nbsp;
        <Logout/>
         
    </div>
)