import elegad from "/imgs/elegad.png";
import watch from "/imgs/watch.png";
import procam from "/imgs/procam.png";
import headphone from "/imgs/headphone.png";
import awatcch from "/imgs/awatcch.png";
import gameset from "/imgs/gameset.png";
import Lpc from "/imgs/Lpc.png";
import sm from "/imgs/sm.png";
import elc from "/imgs/elc.png";
export const HeroImg3 = () => {
    return (
        <>



               <div className=" flex 2xl:flex-row 2xl:mx-10 lg:flex-col md:flex-col sm:flex-col max-sm:flex-col justify-center p-1  min-h-72 items-center bg-white mx-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 max-sm:mx-0 mt-3"> 
                             
                                          <div class="relative mb-8  h-64">
                                             <img src={elegad} alt="Home and outdoor" class="2xl:w-4xl xl:w-4xl h-72   lg:w-3xl md:w-2xl sm:w-2xl max-sm:w-2xl object-cover" />
                                         <div class="absolute top-6 left-6 text-black">
                                         <h2 class="text-xl font-bold">Consumer<br />electronics and <br/>Gadgets</h2>
                                        
                                        <button class="absolute  w-32 mt-3 bg-white text-black font-medium px-4 py-2 rounded hover:bg-black hover:text-white hover:cursor-pointer transition-all delay-300 duration-150 ease-out">
                                        Source now
                                         </button>
                                           </div>
                                      </div>
                                          
                                       
                                        
                                       
                                       
                                       
                                        
                             
                                          <div className="flex justify-center flex-wrap"> 
                                             <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-2 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>smart watches</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={watch} className="w-16 mt-13"></img>
                                             </div>
                             
                                               <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 border-2 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-solid border-blac">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>cameras</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={procam} className="w-20 mt-13"></img>
                                             </div>
                             
                                              <div className="flex  justify-around items-center 2xl:w-60  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>HeadPhone</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={headphone} className="w-16 mt-13"></img>
                                             </div>
                             
                                              <div className="flex  justify-around items-center 2xl:w-64  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>Smart Watches</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={awatcch} className="w-16 mt-13"></img>
                                             </div>
                             
                                                  <div className="flex justify-center flex-wrap"> 
                                             <div className="flex  justify-around items-center 2xl:w-60  h-36 xl:w-56 border-2 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>Gaming set</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={gameset} className="w-16 mt-13"></img>
                                             </div>
                             
                                               <div className="flex  justify-around items-center 2xl:w-60  h-36 xl:w-56 border-2 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>Laptop & Pc</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p> 
                                                </div>
                                                 <img src={Lpc} className="w-16 mt-13"></img>
                                             </div>
                             
                                              <div className="flex   justify-around items-center 2xl:w-60  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>Smartphones</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={sm} className="w-16 mt-10"></img>
                                             </div>
                             
                                              <div className="flex  justify-around items-center 2xl:w-64  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                                <div className="mb-5  md:ml-2">
                                                  <h2>Electric kettle</h2>
                                                 <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                                </div>
                                                 <img src={elc} className="w-16 mt-13"></img>
                                             </div>
                             
                                          </div>
                               
                             
                             </div>
                                     </div>  

                   
                                
           
        </>
    );
}