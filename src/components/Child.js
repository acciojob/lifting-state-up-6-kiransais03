import React,{useState} from "react";

const Child = ({state,setState})=>{

console.log(state)
return (<>
    <h2>Child Component</h2>
   <ul>
    <li>Learn React <button onClick={(e)=>{setState({...state,learnreact:"complete"});e.target.style.display="none"}}>Complete</button></li>
    <li>Build a React App <button onClick={(e)=>{setState({...state,buildreact:"complete"});e.target.style.display="none"}}>Complete</button></li>
    <li>Deploy the React App <button onClick={(e)=>{setState({...state,deployreact:"complete"});e.target.style.display="none"}}>Complete</button></li>
   </ul>
    </>)
}

export default Child;