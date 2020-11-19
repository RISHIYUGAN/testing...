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
import Addexpensepage from "./redux/expense-fun"
import {firebase,database} from "./redux/redux-firebase"
import './App.css';
import configstore from "./redux/redux-store"
import { Provider } from 'react-redux';
import {AppRouter} from "./redux/Router"
import {startsetExpense} from "./redux/action"
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
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log("log in")
  }
  else {
    console.log("log out")
  }
})
export default App