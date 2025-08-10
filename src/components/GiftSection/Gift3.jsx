import { FaPlus } from "react-icons/fa";
export const Gift3=()=>{
    return(
        <>
          <div className="flex space-x-6 justify-start items-center flex-wrap space-y-3">
                          <span className="border-2 border-solid border-blue-600 p-1 flex rounded-lg">Samsung <FaPlus className="text-2xl" /></span> 
                          <span className="border-2 border-solid border-blue-600 p-1 flex rounded-lg">Apple <FaPlus className="text-2xl" /></span> 
                          <span className="border-2 border-solid border-blue-600 p-1 flex rounded-lg ">Poco <FaPlus className="text-2xl" /></span> 
                          <span className="border-2 border-solid border-blue-600 p-1 flex rounded-lg">Metalic <FaPlus className="text-2xl" /></span> 
                          <span className="border-2 border-solid border-blue-600 p-1 flex  rounded-lg">4star <FaPlus className="text-2xl" /></span> 
                          <span className="border-2 border-solid border-blue-600 p-1 flex rounded-lg">3star <FaPlus className="text-2xl" /></span> 
                          <span className="text-blue-600 text-md">clear all filters</span> 
                          
             </div>
        </>
    )
}