import React,{useState} from "react";

const Child = ({state,setState})=>{
let {learnreact,buildreact,deployreact} = state
console.log(state)
return (<>
    <h2>Child Component</h2>
   <ul>
    <li>Learn React {learnreact && <button onClick={(e)=>{setState({...state,learnreact:""});e.target.style.display="none"}}>Complete</button>}</li>
    <li>Build a React App {buildreact && <button onClick={(e)=>{setState({...state,buildreact:""});e.target.style.display="none"}}>Complete</button>}</li>
    <li>Deploy the React App {deployreact && <button onClick={(e)=>{setState({...state,deployreact:""});e.target.style.display="none"}}>Complete</button>}</li>
   </ul>
    </>)
}

export default Child;