import {Navigate} from "react-router-dom";
import {getUser} from "./auth";

export default function Protected({children}){
 if(!getUser()) return <Navigate to="/login"/>;
 return children;
}