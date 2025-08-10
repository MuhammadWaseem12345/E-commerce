import { FooterMain } from "../Footer/FooterMain"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { Project1 } from "./Project1"
import { Project2 } from "./Project2"
import { Project3 } from "./Project3"
import { Project4 } from "./Project4"
import { ProjectNav } from "./ProjectNav"


export const ProjectMain=()=>{
    return(
        <>
        <Header/>
        <Navbar/>
        <ProjectNav/>
         <div className="flex flex-col lg:flex-row  gap-6 p-6 mx-28 xl:mx-15  lg:mx-10 md:mx-7 sm:mx-5 max-sm:mx-0 bg-gray-100 min-h-screen">

        <Project1/>
         <div className="w-full lg:w-3/4 space-y-4">
        <Project2/>
        <Project3/>
        <Project4/>
           </div>
        </div>
        <FooterMain/>
        </>
    )
}