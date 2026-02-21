const BASE="http://localhost:5000/api";

export const getPrograms=async()=>{
 const res=await fetch(BASE+"/programs");
 return res.json();
};

export const enrollProgram=async(data)=>{
 const res=await fetch(BASE+"/enroll",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(data)
 });
 return res.json();
};