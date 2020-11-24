import React from 'react';
// import logo from './logo.svg';
// import store from "./reduxfile"
// import { BrowserRouter, Route } from 'react-router-dom';
// import "normalize.css"
// import Modal from "react-modal"
// import "./andrewcss.scss"
// import { createStore, combineReducers } from "redux"
// import {v4 as uuid} from 'uuid';
// import Test from "./Datepicker"
// import Meme from "./meme generator"
// import Reacto from "./Andrew.js"
// import Rishi from "./flex/todo"
// import Addexpensepage from "./redux/expense-fun"
import Addexpensepage from "./redux/Addexpense-fun"
import {firebase} from "./redux/redux-firebase"
import database from "./redux/redux-firebase"
import './App.css';
import configstore from "./redux/redux-store"
import { Provider } from 'react-redux';
import {AppRouter,history} from "./redux/Router"
import {startsetExpense,setExpense,Updatevalue,Addvalue,deletevalue} from "./redux/action"
// import Countingapp from "./redux-practise/counting-app"
export const store = configstore();
function App() {
  return (
    <div>
      <Provider store={store}>
     <AppRouter/> 
     </Provider>
   </div>
  );
}

database.ref("expense").on('child_changed',(snapshot)=>{
  const val=snapshot.val()
  const key =  snapshot.key
  store.dispatch(Updatevalue(key,val))
 }
 )


 database.ref("expense").on('child_removed',(snapshot)=>{
  const key =  snapshot.key
  store.dispatch(deletevalue(key))
 }
 )

 export default App


