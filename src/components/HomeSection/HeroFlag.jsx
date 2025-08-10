import uae from "/imgs/uae.jpg";
import aus from "/imgs/aus.jpg";
import usa from "/imgs/usa.jpg";
import rus from "/imgs/rus.jpg";
import fra from "/imgs/fra.jpg";
import den from "/imgs/den.jpg";
import chn from "/imgs/chn.jpg";
import brt from "/imgs/brt.jpg";
export const HeroFlag = () => {
    return(
        <>
              <div className="flex flex-col bg-gray-100   mt-5 mx-20 xl:mx-15 lg:mx-10 md:mx-7 sm:mx-5 max-sm:mx-0 py-7">
                              <h1 className="font-bold text-2xl ml-8">Supplier by region</h1>
                           
                               <div className="flex justify-between px-40 items-center gap-4 flex-wrap  mt-5">
                                    <div className="flex justify-center space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={uae} className="w-16 h-14 "/>
                                      <div className="">
                                          <h1>Arab Emirates</h1>
                                          <p className="text-xs">shopname.ae</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={aus} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>Australia</h1>
                                          <p className="text-xs">shopname.ae</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={usa} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>US</h1>
                                          <p className="text-xs">shopname.ae</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={rus} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>Russian</h1>
                                          <p className="text-xs">shopname.ru</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={fra} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>Italy</h1>
                                          <p className="text-xs">shopname.it</p>
                                      </div>
                                    </div>
                  
                                    
                                     
                         </div>
                  
                                     <div className="flex justify-between items-center px-40 gap-4 flex-wrap  mt-5">
                                    <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={den} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>Denmark</h1>
                                          <p className="text-xs">shopname.com.dk</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={fra} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>France</h1>
                                          <p className="text-xs">shopname.fr</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={uae} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>UAE</h1>
                                          <p className="text-xs">shopname.ae</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={chn} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>China</h1>
                                          <p className="text-xs">shopname.ae</p>
                                      </div>
                                    </div>
                  
                                        <div className="flex justify-around space-x-2 items-center cursor-pointer hover:scale-[1.3] hover:opacity-50 hover:transition-all duration-1000 delay-200">
                                      <img src={brt} className="w-16 h-14"/>
                                      <div className="">
                                          <h1>Britian</h1>
                                          <p className="text-xs">shopname.it</p>
                                      </div>
                                    </div>
                        
                         </div>
                  
                      
                       </div>
        </>
    )
}