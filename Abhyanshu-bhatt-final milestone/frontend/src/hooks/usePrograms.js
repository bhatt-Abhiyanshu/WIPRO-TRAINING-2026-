import { useEffect, useState } from "react";
import { getPrograms } from "../api/api";

export default function usePrograms(){

 const [programs,setPrograms]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");

 useEffect(()=>{
  getPrograms()
  .then(d=>{
   setPrograms(d.data || []);
   setLoading(false);
  })
  .catch(()=>setError("Failed to load"));
 },[]);

 return { programs, loading, error };
}