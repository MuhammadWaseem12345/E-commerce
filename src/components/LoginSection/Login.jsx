

import { IoIosContact } from "react-icons/io";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { GiRoyalLove } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Login=()=>{
    return(
        <>
              <div className="mx-28 xl:mx-15 text-white  bg-black min-h-screen lg:mx-10 md:mx-7 sm:mx-5 max-sm:mx-0">
             <div className="flex flex-col w-1/2 max-sm:w-full bg-gray-500 justify-center pl-10 py-8 "> 
               <IoIosContact className=" text-5xl hover:cursor-pointer" /><br></br>
              
               <div className="flex space-x-3">
                 <span className="flex text-2xl hover:cursor-pointer"> Sign in <FaGripLinesVertical className="text-3xl hover:cursor-pointer"/></span>
                <span className="text-2xl hover:cursor-pointer">Register</span>
               </div>
               
         </div>

         <div className= " flex flex-col max-sm:w-full text-black bg-gray-100 w-1/2 pl-10 py-3 space-y-6">
               <div className="flex space-x-3">
                <FaHome className="text-3xl hover:cursor-pointer"/>
              <li className="text-2xl hover:cursor-pointer list-none  decoration-2 max-lg:hidden hover:underline hover:text-yellow-400 transition-all duration-500 delay-150 ease-linear"><Link to="/">Home</Link></li>
               </div>
                <div className="flex space-x-3">
                <IoMdMenu className="text-3xl hover:cursor-pointer"/>
                 <span className="text-2xl hover:cursor-pointer">Categaries</span>
               </div>

                <div className="flex space-x-3 ">
                 <GiRoyalLove className="hover:cursor-pointer text-3xl"/>
                 <span className="hover:cursor-pointer text-2xl">favourite</span>
               </div> 

                <div className="flex space-x-3">
                 <MdDeleteOutline className="hover:cursor-pointer text-3xl  "/>
                 <span className="hover:cursor-pointer text-2xl">My order</span>
               </div>
<hr></hr>
         </div>



                <div className= " flex flex-col max-sm:w-full text-black bg-gray-100 w-1/2 pl-10 py-3 space-y-6   ">
               <div className="flex space-x-3">
                <AiOutlineGlobal   className="text-3xl hover:cursor-pointer"/>
                    <div className="flex space-x-3">
                 <span className="flex text-2xl hover:cursor-pointer"> English  <FaGripLinesVertical className="text-3xl hover:cursor-pointer"/></span>
                <span className="text-2xl hover:cursor-pointer">USD</span>
               </div>
               </div>

                <div className="flex space-x-3">
                <MdHeadsetMic className="text-3xl hover:cursor-pointer"/>
                 <span className="text-2xl hover:cursor-pointer">Categaries</span>
               </div>

                <div className="flex space-x-3 ">
                 <CiViewTable className="hover:cursor-pointer text-3xl"/>
                 <span className="hover:cursor-pointer text-2xl">favourite</span>
               </div> 

              
<hr></hr>
         </div>
         
             <div className="flex flex-col max-sm:w-full justify-center items-center text-2xl space-y-5 pb-24 bg-gray-100 w-1/2 text-black">
                <span className="hover:cursor-pointer ">user agreement</span>
                <span className="hover:cursor-pointer">partenership</span>
                <span className="hover:cursor-pointer">privacy policy</span>
             </div>
        </div>
      
        </>
    )
}