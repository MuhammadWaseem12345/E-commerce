import React from "react"
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiRoyalLove } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
export const Header=()=>{
    return(
        <>
         <div className=" flex justify-around  items-center h-16  flex-wrap text-black bg-white md:h-24    sm:h-28 max-sm:h-32 ">
              <div className=" flex justify-around items-center space-x-3 max-sm:px-5">
                <FaShoppingBag className= "text-2xl hover:cursor-pointer"/>
                <h1 className="text-2xl font-bold text-blue-400 hover:cursor-pointer">Brand</h1>
              </div>

              <div className="  border-2 border-solid border-blue-600 rounded-md">
                <input placeholder="Search..... " className="border-none outline-none max-sm:w-16  "></input>
                <select className="border-r border-l  border-blue-600 py-0.5 max-sm:hidden" ><option >All Category</option></select>
                <button className="px-10 py-0.5 text-white bg-blue-600 hover:cursor-pointer max-sm:px-2  rounded-br-md">search</button>
              </div>

              

             <div className="flex flex-wrap justify-center items-center  space-x-10 max-sm:space-x-5 max-sm:text-sm">
                 <div className="flex flex-col justify-center items-center">
                 <CgProfile className="hover:cursor-pointer"/>
                <h3 className="hover:cursor-pointer">Profile</h3>
              </div>
              
               <div className="flex flex-col justify-center items-center">
                <MdOutlineMessage className="hover:cursor-pointer"/>
                <h3 className="hover:cursor-pointer">Message</h3>
              </div>

              <div className="flex flex-col justify-center items-center">
                <GiRoyalLove className="hover:cursor-pointer"/>
                <h3 className="hover:cursor-pointer">Order</h3>
               </div>
              
              <div className="flex flex-col justify-center items-center">
                <IoMdCart className="hover:cursor-pointer"/>
                <h3 className="hover:cursor-pointer">MyCart</h3>
               </div>
             </div>

         </div>
        </>
    )
}
;