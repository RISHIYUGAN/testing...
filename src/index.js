 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from "./App.js"
import { startAddExpense, startsetExpense } from './redux/action.js';
import {store} from "./App"
import database from "./redux/redux-firebase"
// import './index.css';
// import Reacto from "./Andrew"

// import * as serviceWorker from './serviceWorker';
// import Meme from './meme generator';
// store.dispatch(startsetExpense()).then(()=>
// {
//   ReactDOM.render(
//     <App/>
// ,
// document.getElementById('root')
// );
// })
ReactDOM.render(
  <h1 style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</h1>
,
document.getElementById('root')
);


database.ref("expense").on("value",()=>{
  store.dispatch(startsetExpense()).then(()=>
  {
    ReactDOM.render(
      <App/>
  ,
  document.getElementById('root')
  );
  })
})
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();
