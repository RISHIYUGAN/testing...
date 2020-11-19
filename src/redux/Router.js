import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from "react"
import {Header} from "./Header"
import Dashboard from "./dashboard"
import Login from "./LoginPage"
import AddExpense from "./expense-fun"

export const AppRouter=()=>(
    <BrowserRouter>
    <Header/>
    <div>
        <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={Dashboard}  />
        <Route path="/AddExpense" component={AddExpense}/>
        </Switch>
    </div>
    
    </BrowserRouter>
)


