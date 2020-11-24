 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from "./App.js"
import { startAddExpense, startsetExpense } from './redux/action.js';
import {store} from "./App"
import database from "./redux/redux-firebase"
import {firebase} from "./redux/redux-firebase"
import {AppRouter,history} from "./redux/Router"
import {Login,Logout} from "./redux/Auth"
// import database from "./redux/redux-firebase"
// import './index.css';
// import Reacto from "./Andrew"

// import * as serviceWorker from './serviceWorker';
// import Meme from './meme generator';


let hasRendered = false;
const renderApp=()=>{
  if (hasRendered===false){
    ReactDOM.render(
      <App/>
  ,
  document.getElementById('root')
  );
  hasRendered=true;
  }
}
ReactDOM.render(
  <h1 style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</h1>
,
document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(Login(user.uid))
    store.dispatch(startsetExpense()).then(()=>
    {  
     renderApp();
    }
    )
    console.log("log-in");
    if(history.location.pathname==="/"){
      history.push("/dashboard");
    }
    console.log(user.uid)

  }
  else {
    store.dispatch(Logout())
    renderApp();
    history.push("/");
    console.log("log-out");
  }
})

// database.ref("expense").on("value",()=>{
//   store.dispatch(startsetExpense()).then(()=>
//   {
//     ReactDOM.render(
//       <App/>
//   ,
//   document.getElementById('root')
//   );
//   })
// })
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();
