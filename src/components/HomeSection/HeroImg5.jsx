 import { IoSearch } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";
import can1 from "/imgs/can1.png";
import can2 from "/imgs/can2.png";
import can3 from "/imgs/can3.png";
import can4 from "/imgs/can4.png";

export const HeroImg5 = () => {
    return (
        <>
     
                        <div className="flex flex-col mt-5 py-4 2xl:mx-10 bg-white xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 max-sm:mx-0">
                              <h1 className="font-bold text-2xl ml-10">Our Extra Services</h1>
                           
                               <div className="flex justify-center items-center flex-wrap gap-5 mt-3 ">
                                  <div className=" w-80 h-56 cursor-pointer hover:scale-[0.8] hover:opacity-50 hover:transition-all duration-1000 delay-200 bg-white relative" >
                                      <img src={can1} className="w-80 h-40  "/>
                                        <div className="flex justify-between w-64">
                                        <h1 className="ml-8 mt-2">Source from <br/>Industry Hubs</h1>
                                        <IoSearch className="absolute top-28 right-10 bg-gray-300 rounded-3xl text-5xl p-3 "/>
                                        </div>
                                  </div>
                      
                                        <div className="w-80 h-56 cursor-pointer hover:scale-[1.1] hover:opacity-50 hover:transition-all duration-1000 delay-200 bg-white relative">
                                      <img src={can2} className="w-80 h-40 "/>
                                        <div className="flex justify-between w-64">
                                        <h1 className="ml-8 mt-2">cutomize your <br/> Products</h1>
                                        <MdDeleteOutline className="absolute top-28 right-10 bg-gray-300 rounded-3xl text-5xl p-3"/>
                                        </div>
                                  </div>
                      
                                     <div className="w-80 h-56 cursor-pointer hover:scale-[1.1] hover:opacity-50 hover:transition-all duration-1000 delay-200 bg-white relative ">
                                      <img src={can3} className="w-80 h-40 "/>
                                        <div className="flex justify-between w-64">
                                        <h1 className="ml-8 mt-2">Fast , realiable shiping <br/> by ocean or air</h1>
                                        <IoMdSend className="absolute top-28 right-10 bg-gray-300 rounded-3xl text-5xl p-3"/>
                                        </div>
                                  </div>
                      
                      
                                     <div className="w-80 h-56 cursor-pointer  hover:scale-[0.8] hover:opacity-50 hover:transition-all duration-1000 delay-200 bg-white relative">
                                      <img src={can4} className="w-80 h-40"/>
                                        <div className="flex justify-between w-64">
                                        <h1 className="ml-5 mt-2">product Monitoring <br/> and inspection</h1>
                                        <AiOutlineSecurityScan className="absolute top-28 right-10 bg-gray-300 rounded-3xl text-5xl p-3"/>
                                        </div>
                                  </div> 
                      
                               </div>
                           </div>
        </>
    );
}