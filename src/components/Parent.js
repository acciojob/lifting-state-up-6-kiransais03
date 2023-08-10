import React,{useState} from "react";
import Child from "./Child"

const Parent = ()=>{

let [state,setState]=useState({learnreact:false,buildreact:false,deployreact:false});

return (<>
    <h1>Parent Component</h1>
    <Child state={state} setState={setState} />
    </>)
}

export default Parent;