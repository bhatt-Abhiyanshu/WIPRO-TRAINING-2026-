import {useEffect,useState} from "react";
import api from "../api";

export default function ProgramList(){

const [programs,setPrograms]=useState([]);
const [enrolled,setEnrolled]=useState([]);
const [msg,setMsg]=useState("");

useEffect(()=>{
 api.get("/api/programs")
 .then(res=>setPrograms(res.data.data))
 .catch(()=>setMsg("Error loading"));
},[]);

const enroll=async(p)=>{
 try{
  await api.post("/api/enroll",{userId:"USR101",programId:p.programId});
  setEnrolled([...enrolled,p]);
  setMsg("Success");
 }catch(e){
  setMsg(e.response?.data?.message||"Error");
 }
};

return(
<div>
<h2>Programs</h2>

{programs.map(p=>(
<div key={p.programId}>
<h3>{p.name}</h3>
<p>{p.category} | {p.level} | ₹{p.price}</p>
<button onClick={()=>enroll(p)}>Enroll</button>
</div>
))}

<h3>{msg}</h3>

<h2>Enrolled</h2>
{enrolled.map(p=><div key={p.programId}>{p.name}</div>)}
</div>
);
}