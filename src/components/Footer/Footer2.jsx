import usa from "/imgs/usa.jpg";
export const Footer2=()=>{
    return(
        <>
          <div className="flex justify-around items-center h-13">
            <span>@ 2023 commerce</span>
           <div className="flex"> 
             <img src={usa} className="w-7 h-5"/>
            <select><option>English</option></select>
           </div>
           
         </div>
        </>
    )
}