import { MdOutlineMessage } from "react-icons/md";
export const HeroIn=()=>{
    return(
        <>
        

                        <div className="flex flex-col  justify-center items-center space-y-3 bg-gray-200 py-10 my-0.5 ">
                               <h1 className="font-extrabold text-3xl">Subscribe on our newsletter</h1>
                               <p className="opacity-30">get daily news on upcoming information from many supplier all over the world</p>
                               <div className="flex max-sm:flex-col space-y-3 space-x-2">
                                    <div className="flex border-1 border-solid border-gray-300">
                                       <MdOutlineMessage className="text-xl opacity-70"/>
                                    <input type="email" placeholder="Email" className="outline-none opacity-50"/>
                                    </div>
                                  <button className="bg-blue-600 text-white rounded-md h-7">Subscribe</button>
                               </div>
                                 
                              </div>
        </>
    )
}