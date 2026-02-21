import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./pages/Login";
import ProgramList from "./components/ProgramList";
import Protected from "./Protected";

function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/login" element={<Login/>}/>

<Route
path="/"
element={
<Protected>
<ProgramList/>
</Protected>
}
/>

<Route path="*" element={<Navigate to="/login"/>}/>

</Routes>
</BrowserRouter>
);
}

export default App;