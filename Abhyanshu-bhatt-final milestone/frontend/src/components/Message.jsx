export default function Message({text}){
 if(!text) return null;
 return <p className="text-center text-green-600 mt-4">{text}</p>;
}