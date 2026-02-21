export default function ProgramCard({program,onEnroll,disabled}){

 return(
  <div className="bg-white rounded-2xl shadow p-5">
   <h2 className="font-bold text-lg">{program.name}</h2>
   <p className="text-gray-500">{program.category}</p>
   <p>{program.level}</p>
   <p className="font-semibold">₹{program.price}</p>

   <button
    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
    disabled={disabled}
    onClick={()=>onEnroll(program.programId)}
   >
    Enroll
   </button>
  </div>
 );
}