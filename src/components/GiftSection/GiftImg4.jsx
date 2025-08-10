import Lpc from "/imgs/Lpc.png";

export const GiftImg4=()=>{
    return(
        <>
          <div className="flex flex-col justify-center w-80 h-80  items-center">
            <div className="bg-white rounded-xl flex-col shadow-sm p-4 flex gap-4 items-start">
              <img src={Lpc} alt="product" className="w-40 h-40 object-cover rounded-lg" />
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">Canon Camera EOS 2000</h3>
                <p className="text-red-600 font-bold">$998.00 <span className="line-through text-gray-400 text-sm ml-2">$1128.00</span></p>
                <p className="text-yellow-500 text-sm">⭐⭐⭐⭐ 7.5 • 154 orders • </p>
              <span className="text-green-600">Free Shipping</span>

              </div>
            </div>
            
          </div>
        </>
    )
}