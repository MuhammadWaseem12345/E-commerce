import React from "react"
import { IoMenu } from "react-icons/io5";

import  germany from "/imgs/germany.png";
import { Link } from "react-router-dom";

 export const Navbar=()=>{
    return(
        <>
         <div className="flex justify-around flex-wrap bg-white mx-0 h-10 mt-2 lg:h-14 md:h-20 sm:h-24 max-sm:h-28 max-sm:mx-0 ">
            <ul className="flex flex-wrap justify-center items-center  space-x-12 sm:space-x-7 max-sm:space-x-5">
             <IoMenu className="text-3xl hover:cursor-pointer "/>
            <li className=" decoration-2 hover:cursor-pointer max-lg:hidden ">All Category</li>
        <li className="hover:cursor-pointer decoration-2 hover:underline hover:text-yellow-400  transition-all duration-500 delay-150 ease-linear"><Link to="/login">Login</Link></li>
          <li className="hover:cursor-pointer decoration-2 hover:underline hover:text-yellow-400 transition-all duration-500 delay-150 ease-linear"><Link to="/gift">Gift Boxes</Link></li>
           <li className="hover:cursor-pointer decoration-2 hover:underline hover:text-yellow-400 transition-all duration-500 delay-150 ease-linear"><Link to="/project">Project</Link></li>
          <li className="hover:cursor-pointer decoration-2  hover:underline hover:text-yellow-400 transition-all duration-500 delay-150 ease-linear"><Link to="/">Menu item</Link></li>
            
            
             <li><select className="outline-none hover:cursor-pointer max-lg:hidden"><option>Help</option></select></li>
             </ul>
             <div className="flex justify-between hover:cursor-pointer space-x-32 sm:space-x-20 max-sm:space-x-12 ">
                 <select className="outline-none hover:cursor-pointer"><option>English , USD</option></select>
                          <div className="flex items-center space-x-2">
          <select className="outline-none hover:cursor-pointer max-sm:hidden">
            <option>Ship to</option>
          </select>
          <img src={germany} alt="Germany flag" className="w-5 h-5" />
        </div>
                
             </div>

        
         </div>

           
        
        </>
    )
}


