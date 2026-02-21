import {useEffect,useState} from "react";
import {getPrograms,enrollProgram} from "../api";
import {getUser,isAdmin} from "../auth";
export default function ProgramList(){

const [programs,setPrograms]=useState([]);
const [enrolled,setEnrolled]=useState([]);
const user=getUser();
const admin=isAdmin();
const userId=localStorage.getItem("userId");
// const isAdmin=userId==="101";

useEffect(()=>{
 load();
},[]);

const load=()=>{
 getPrograms().then(res=>setPrograms(res.data));
};

const enroll=async(p)=>{
 const res=await enrollProgram({userId,programId:p.programId});
 if(res.success) setEnrolled(prev=>[...prev,p]);
};

/* ADMIN CRUD */

const deleteProgram=async(id)=>{
 await fetch("http://localhost:5000/api/programs/"+id,{method:"DELETE"});
 load();
};

return(
<div>

<h2>Programs</h2>

{programs.map(p=>(
<div key={p.programId} style={{border:"1px solid",margin:10,padding:10}}>
<h3>{p.name}</h3>
<p>{p.category}</p>
<p>{p.level}</p>
<p>₹{p.price}</p>

<button onClick={()=>enroll(p)}>Enroll</button>

{admin && (
<>
<button onClick={()=>deleteProgram(p.programId)}>Delete</button>
<button onClick={()=>updateProgram(p.programId)}>Edit</button>
</>
)}
</div>
))}

<h2>Enrolled</h2>
{enrolled.map(e=><div key={e.programId}>{e.name}</div>)}

</div>
);
}