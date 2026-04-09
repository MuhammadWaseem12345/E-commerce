
import item1 from "/imgs/item1.png";
import item2 from "/imgs/item2.png";
import item3 from "/imgs/item3.png";
import item4 from "/imgs/item4.png";
import item5 from "/imgs/item5.png";
import item6 from "/imgs/item6.png";
import headphone from "/imgs/headphone.png";
import awatcch from "/imgs/awatcch.png";
import mwatcch from "/imgs/mwatcch.png";
export const HeroImg4 = () => {
    return (
        <>
     
                    <div className="flex flex-col bg-gray-100 mt-5 2xl:mx-10  xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 max-sm:mx-0">
                        <h1 className="font-bold text-2xl ml-10">Recommend items</h1>
                     <div>
                
                         <div className="flex justify-center items-center gap-4  mt-3 flex-wrap ">
                          <div className="bg-white w-64 h-72">
                            <img src={item1}  className="w-52 h-48 "/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>T-shirts with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                         <div className="bg-white w-64 h-72">
                            <img src={item2}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>T-shirts with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={item3}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>T-shirts with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={item4}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3> Diary</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={item5}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3> Bag with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                        </div>
                
                         <div className="flex justify-center items-center gap-4 mt-3 flex-wrap">
                          <div className="bg-white w-64 h-72">
                            <img src={item6}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>pant with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                         <div className="bg-white w-64 h-72">
                            <img src={headphone}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>Headphone</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={item5}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3> Bag with multiple <br/> colors , for men</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={mwatcch}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>Jar</h3>
                            </div>
                        </div>
                
                          <div className="bg-white w-64 h-72">
                            <img src={awatcch}  className="w-52 h-48"/>
                            <div className="ml-5 mt-3">
                             <h1>$10.30</h1>
                             <h3>Electric Kettle</h3>
                            </div>
                        </div>
                
                      </div>
                
                     </div>
                </div>
        </>
    );
}
