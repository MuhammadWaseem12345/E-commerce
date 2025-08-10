
import { FooterMain } from "../Footer/FooterMain"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { Gift1 } from "./Gift1"
import { Gift2 } from "./Gift2"
import { Gift3 } from "./Gift3"
import { Gift4 } from "./Gift4"
import { Gift5 } from "./Gift5"



export const GiftMain=()=>{
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="flex flex-col lg:flex-row mx-28 xl:mx-15 lg:mx-10 md:mx-7 sm:mx-5 max-sm:mx-0 gap-6 p-6 bg-gray-100 min-h-screen">

        <Gift1/>

           <div className="w-full lg:w-3/4 space-y-4">

        <Gift2/>
        <Gift3/>

          <div className="flex justify-between items-center  flex-wrap">

        <Gift4/>

        </div>

        <Gift5/>

        </div>
        </div>
          
          <FooterMain/>
     
        </>
    )
}