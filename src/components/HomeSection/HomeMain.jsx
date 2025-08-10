
import { FooterMain } from "../Footer/FooterMain"
import { Header } from "../Header/Header"
import { Navbar } from "../Navbar/Navbar"
import { Hero } from "./Hero"
import { HeroFlag } from "./HeroFlag"
import { HeroImg } from "./HeroImg"
import { HeroImg2 } from "./HeroImg2"
import { HeroImg3 } from "./HeroImg3"
import { HeroImg4 } from "./HeroImg4"
import { HeroImg5 } from "./HeroImg5"
import { HeroIn } from "./HeroIn"

export const HomeMain =()=>{
    return(
        <>
       
        <Header/>
        <Navbar/>
        <Hero/>
         <HeroImg/>
         <HeroImg2/>
         <HeroImg3/>
         <HeroImg4/>
         <HeroImg5/>
         <HeroFlag/>
         <HeroIn/>
        <FooterMain/>

        </>
    )
}