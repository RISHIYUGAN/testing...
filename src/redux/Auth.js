import {firebase,googleAuthProvider} from "./redux-firebase"
import React from "react"

export const Login=(uid)=>({
  type:"Login",
  uid
})

export const startLogin =()=>{
    return ()=>{
      return firebase.auth().signInWithPopup(googleAuthProvider).then(()=>{document.getElementById("error").innerHTML=""}).catch((error)=>{if(error){document.getElementById("error").innerHTML="Please try again"}});
      }
    }

    export const Logout=()=>({
      type:"Logout"
    })

export const startLogout=()=>{
  return ()=>{
  return firebase.auth().signOut();
  }
}