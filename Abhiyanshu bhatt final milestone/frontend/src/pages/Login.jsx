import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getUser} from "../auth";

export default function Login(){

const [userId,setUserId]=useState("");
const nav=useNavigate();

useEffect(()=>{
 if(getUser()) nav("/");   // already logged → go home
},[]);

const login=()=>{
 if(!userId) return alert("Enter id");

 localStorage.setItem("userId",userId);
 nav("/");
};

return(
<div style={{padding:40}}>
<h2>Login</h2>

<input
placeholder="Enter 101 or 102"
value={userId}
onChange={e=>setUserId(e.target.value)}
/>

<button onClick={login}>Login</button>
</div>
);
}