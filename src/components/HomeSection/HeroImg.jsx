import watch from "/imgs/watch.png";
import Lpc from "/imgs/Lpc.png";
import procam from "/imgs/procam.png";
import headph from "/imgs/headph.png";
import cancam from "/imgs/cancam.png";
export const HeroImg = () => {
    return (
        <>


            <div className="flex justify-center border-2  items-center min-w-96 min-h-96 mx-10  border-solid border-black  bg-white mt-3 space-x-5 lg:flex-row  md:mx-10 md:flex-col sm:flex-col max-sm:flex-col max-sm:mx-0 lg:space-y-0 lg:space-x-5 ">
                
                            <div className=" w-full lg:w-1/5  flex flex-col justify-center  items-center   mb-36  ml-2  ">
                                  <h1>Deals and Offers</h1>
                                  <p>Hygiene and equipments</p>
                                 <div className="flex space-x-3 text-white text-center">
                                     <span className="bg-black ">04<br></br>Days</span><br></br>
                                  <span className="bg-black">13<br></br>Hours</span><br></br>
                                  <span className="bg-black">34<br></br>Mins</span><br></br>
                                  <span className="bg-black">56<br></br>Secs</span>
                                 </div>
                            </div>
         <div className=" flex justify-center flex-wrap  space-y-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                      
                     
                      <div className="flex-shrink-0 w-56 h-96   border bl-2 text-center rounded">
                        <img src={watch} alt="Smart Watch" class="mx-auto mt-5" />
                        <p className="text-sm mt-8">Smart watches</p>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block mt-1">-25%</span>
                      </div>
                
                      <div className="flex-shrink-0 w-56 h-96 border  br-2  text-center rounded">
                        <img src={Lpc} alt="Laptop" class="mx-auto mt-15" />
                        <p className="text-sm mt-20">Laptops</p>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block mt-1">-15%</span>
                      </div>
                
                      <div className="flex-shrink-0 w-56 h-96 border br-2 text-center rounded">
                     
                        <img src={procam} alt="Camera" class="mx-auto mt-14" />
                        <p className="text-sm mt-32">GoPro cameras</p>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block mt-1">-40%</span>
                      </div>
                
                      <div className="flex-shrink-0 w-56 h-96 border br-3 border-black text-center rounded">
                        <img src={headph} alt="Headphones" class="mx-auto mt-7" />
                        <p className="text-sm mt-16">Headphones</p>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block mt-1">-25%</span>
                      </div>
                
                      <div className="flex-shrink-0 w-56 h-96 border-2  pl-2 text-center rounded">
                        <img src={cancam}alt="Canon Camera" class="mx-auto mt-9" />
                        <p className="text-sm mt-16">Canon camreras</p>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block mt-1">-25%</span>
                      </div>
                
                    </div> 
                </div>      
        </>
    );
}