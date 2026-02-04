import MyButton from "./Button";

function Footer()
{
return (

    <footer className="  my-4 px-2 py-5 w-full flex items-center justify-between bg-neutral-900 text-amber-50" >
      <h1 className ="text-xl font-bold"> YOUR WELCOME</h1>
      <p className=" font-light ">I'm just another guy 😊</p>
      <MyButton title="Contact Me" />
</footer>
);


}
export default Footer;