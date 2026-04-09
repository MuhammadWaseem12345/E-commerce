import sofa from "/imgs/sofa.png";
import chairs from "/imgs/chairs.png";
import Lamp from "/imgs/Lamp.png";
import kitchdish from "/imgs/kitchdish.png";
import mwatcch from "/imgs/mwatcch.png";
import kitch from "/imgs/kitch.png";
import blender from "/imgs/blender.png";
import happli from "/imgs/happli.jpg";
import maker from "/imgs/maker.png";
export const HeroImg2 = () => {
    return (
        <>


                          <div className=" flex 2xl:flex-row 2xl:mx-10 lg:flex-col p-1 md:flex-col sm:flex-col max-sm:flex-col justify-center  min-h-72 items-center bg-white mx-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 max-sm:mx-0 mt-3   "> 
                        
                                     <div className="relative mb-8  h-64">
                                        <img src={sofa} alt="Home and outdoor" class="2xl:w-4xl xl:w-4xl h-72   lg:w-3xl md:w-2xl sm:w-2xl max-sm:w-2xl object-cove" />
                                    <div className="absolute top-6 left-6 text-black">
                                    <h2 className="text-xl font-bold">Home and<br />outdoor</h2>
                                   
                                   <button className="absolute  w-32 mt-3 bg-white text-black font-medium px-4 py-2 rounded hover:bg-black hover:text-white hover:cursor-pointer transition-all delay-300 duration-150 ease-out ">
                                   Source now
                                    </button>
                                      </div>
                                 </div>
                                     <div className="flex justify-center flex-wrap ">
                                       <div className="flex justify-center flex-wrap "> 
                                        <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-2 border-solid border-black ">
                                           <div className="mb-5  md:ml-2">
                                             <h2>soft chairs</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={chairs} className="w-16 mt-13"></img>
                                        </div>
                        
                                          <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 border-2 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2">
                                             <h2>Lamp</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={Lamp} className="w-16 mt-13"></img>
                                        </div>
                        
                                         <div className="flex  justify-around items-center 2xl:w-60  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2">
                                             <h2>Kitchen Disches</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={kitchdish} className="w-16 mt-13"></img>
                                        </div>
                        
                                         <div className="flex  justify-around items-center 2xl:w-64  h-36 xl:w-56 border-2 lg:w-48 md:w-44 sm:w-44 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2">
                                             <h2>jar</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={mwatcch} className="w-16 mt-13"></img>
                                        </div>
                        
                                             <div className="flex justify-center flex-wrap"> 
                                        <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 border-2 lg:w-48 md:w-40 sm:w-40 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2">
                                             <h2>kitchen mixer</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={kitch} className="w-16 mt-13"></img>
                                        </div>
                        
                                          <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 lg:w-48 md:w-40 sm:w-40 border-2 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2">
                                             <h2>Blender</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={blender} className="w-16 mt-13"></img>
                                        </div> 
                        
                                         <div className="flex  justify-around items-center 2xl:w-60 h-36 xl:w-56 lg:w-48 md:w-44 sm:w-44  border-2 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5 md:ml-2" >
                                             <h2>home appliance</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={happli} className="w-16 mt-10"></img>
                                        </div>
                        
                                         <div className="flex  justify-around items-center 2xl:w-64 h-36 xl:w-56 lg:w-48 md:w-44 sm:w-44 border-2 max-sm:w-40 border-solid border-black">
                                           <div className="mb-5  md:ml-2" >
                                             <h2>flower guldan</h2>
                                            <p className="opacity-80 text-xs mt-2 w-16">from USD 19</p>
                                           </div>
                                            <img src={maker} className="w-20 mt-13"></img>
                                        </div>
                        
                                     </div>
                                     </div>
                                    </div>
                                </div>
           
        </>
    );
}
