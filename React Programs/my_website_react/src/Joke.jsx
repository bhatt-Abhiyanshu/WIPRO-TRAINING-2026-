import { useState } from "react";
export default function Joke(){
    //useState --- Hook -- In react if anything starts with use keyword it means it's a HOOK 
   const[getHeading , setHeading] = useState("here is a funny one...");
   const[getjokes , setjokes] = useState();
    function handleHeadingChange()
    {
            setjokes("What do you call a fake plate of spaghetti?An impasta.")
    }

return(<>
<div className="border p-1">
<h2 className="text-blue-950 border-2 font-bold"> {getHeading} </h2>
<h1 className="flex-wrap"> {getjokes} </h1>
<button onClick={handleHeadingChange} className="bg-amber-700 text-white px-2 py-1 rounded mt-3 cursor-pointer">click me!</button>
</div>

</>);

}