import sm from "/imgs/sm.png";
export const ProjectImg3=()=>{
    return(
        <>
                  <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-start">
              <img src={sm} alt="product" className="w-28 h-28 object-cover rounded-lg" />
              <div className="flex flex-col">
                <h3 className="text-md font-semibold">Canon Camera EOS 2000, Black 10x zoom</h3>
                <p className="text-red-600 font-bold">$998.00 <span className="line-through text-gray-400 text-sm ml-2">$1128.00</span></p>
                <p className="text-yellow-500 text-sm">⭐⭐⭐⭐ 7.5 • 154 orders • <span className="text-green-600">Free Shipping</span></p>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <a href="#" className="text-blue-500 text-sm mt-1">View details</a>
              </div>
            </div>
            
          </div>
        </>
    )
}