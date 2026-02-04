
function Header()
{
    function question()
    {
        return "Just scroll the page.";
    }
    let Question = "How to not get bored..?";
return(
<div className=" p-5 border-b m-2 border-gray-300 w-full  px-2 py-5  bg-neutral-900 text-amber-50">

    <h1 className="text-2xl font-bold underline">Welcome to My website</h1>

    <p className="font-light"> This will be fun,Trust me.</p>
    <h1> In case you're thinking : {Question}</h1>
       <h1> Vamos : ) {question()}</h1>
</div>

)
}
export default Header;
