import {Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from "react"
import {Header} from "./Header"
import Dashboard from "./dashboard"
import Login from "./LoginPage"
import AddExpense from "./Addexpense-fun"
import createHistory from "history/createBrowserHistory"

export const history = createHistory();

const Pagenotfound=()=>(
    <h1 style={{color:"red"}}>404! Page Not Found</h1>
)
export const AppRouter=()=>(
    <Router history={history}>
    <Header/>
    <div>
        <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={Dashboard}  />
        <Route path="/AddExpense" component={AddExpense}/>
        <Route component={Pagenotfound}></Route>
        </Switch>
    </div>
    </Router>
)


