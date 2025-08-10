
import { MdNavigateNext } from "react-icons/md";
export const ProjectNav=()=>{
    return(
        <>
            <ul className="flex justify-start mb-5 items-center space-x-5 h-10 max-sm:h-20 flex-wrap mx-28 xl:mx-15 lg:mx-10 md:mx-7 sm:mx-5 max-sm:mx-0 max-sm:justify-center">
                <li className="flex">Home <MdNavigateNext className="text-2xl"/></li>
                <li className="flex">Clothings <MdNavigateNext className="text-2xl"/></li>
                <li className="flex">Mens'wear<MdNavigateNext className="text-2xl"/></li>
                <li className="flex">summer Clothing</li>
                
            </ul>
      
        </>
    )
}