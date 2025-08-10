import Main from "/imgs/Main.png";
import { IoIosContact } from "react-icons/io";

export const Hero=()=>{
    return(
        <>
           <div className="flex justify-around items-center  min-h-96 min-w-96  mx-20   space-y-3 mt-3 rounded-md p-2 bg-white text-black flex-wrap md:mx-10 sm:mx-5 max-sm:mx-0">
        <div className="flex flex-col    space-y-2 ">
          <span className="bg-gray-300 rounded-md py-1 cursor-pointer ">Automobiles</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Clothes and wear</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Home interiors</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Computer and tech</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Tools,equipment</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Sport and outdoor</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Animal and pets</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">Machinery tools</span>
          <span className="hover:bg-gray-300 rounded-md py-1.5 cursor-pointer transition-all delay-300 duration-300 ease-in-out">More category</span>
        </div>
        {/*  md:w-3/5 sm:w-2/5 sm:h-80 max-sm:w-full max-sm:h-56 */}

         <div className="relative w-3xl min-h-96 flex  justify-start  px-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${Main})` }}
        >

          {/* <img src={Main}  className="relative h-5/5 w-5/5 bg-cover bg-center  "/>  */}


          <div className="flex flex-col mt-10">
            <h3 className="text-2xl sm:text-xl">Latest tranding</h3>
            <h1 className="font-extrabold text-3xl sm:text-xl mt-0.5">Electronic items</h1>
            <button className="bg-white p-1.5 text-xl text-start w-32 rounded-xl mt-5 hover:cursor-pointer hover:bg-black hover:text-white transition-all delay-150 duration-500 ease-linear">Learn More</button>
          </div>
        </div>
        <div className="flex justify-center  flex-col items-start ">
          <div className="flex  flex-col bg-emerald-200 p-4 mb-4">
            <div className="flex mb-2">
              <IoIosContact className=" text-5xl hover:cursor-pointer" />
              <span>Hi,user <br></br>let's get started</span>
            </div>
            <button className="text-white bg-blue-600 rounded-md mb-3 hover:cursor-pointer hover:bg-black hover:text-white hover:transition-all delay-300 duration-200 ease-in-out">Join Now</button>
            <button className="text-blue-600 bg-white rounded-md hover:cursor-pointer hover:bg-black hover:text-white hover:transition-all hover:delay-300 hover:duration-200 hover:ease-in-out">Log in</button>
          </div>
          <div className="bg-amber-500 rounded-md font-bold w-48 text-white pl-3  py-5   pr-10 mb-2">
            <span className="">Get US $10 off with a new supplier</span>
          </div>
          <div className="bg-gray-300 rounded-md  font-bold w-48 text-white pl-3  py-3 pr-10 ">
            <span className="">send quotes with supplier and preference</span>
          </div> 
        </div>
      </div>
        </>
    )
}