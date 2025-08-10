
export const Project1=()=>{
    return(
        <>
              
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-xl shadow-sm space-y-6">

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><input type="checkbox" className="mr-2" />Mobile accessory</li>
              <li><input type="checkbox" className="mr-2" />Electronics</li>
              <li><input type="checkbox" className="mr-2" />Smartphones</li>
              <li><input type="checkbox" className="mr-2" />Modern tech</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Brands</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><input type="checkbox" className="mr-2" />Samsung</li>
              <li><input type="checkbox" className="mr-2" />Apple</li>
              <li><input type="checkbox" className="mr-2" />Huawei</li>
              <li><input type="checkbox" className="mr-2" />Pocco</li>
              <li><input type="checkbox" className="mr-2" />Lenovo</li>
              <li><a href="#" className="text-blue-500 text-sm">See all</a></li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><input type="checkbox" className="mr-2" />Metallic</li>
              <li><input type="checkbox" className="mr-2" />Plastic cover</li>
              <li><input type="checkbox" className="mr-2" />8GB Ram</li>
              <li><input type="checkbox" className="mr-2" />Large Memory</li>
              <li><a href="#" className="text-blue-500 text-sm">See all</a></li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Price range</h2>
               <div className="w-full mb-4">
            <input
              type="range"
              min="0"
              max="999999"
              defaultValue="0"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-2"
            />
            <input
              type="range"
              min="0"
              max="999999"
              defaultValue="999999"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="text" placeholder="Min" className="w-1/2 p-1 border rounded text-sm" />
              <input type="text" placeholder="Max" className="w-1/2 p-1 border rounded text-sm" />
            </div>
            <button className="w-full bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600">Apply</button>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Condition</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><input type="checkbox" className="mr-2" />Any</li>
              <li><input type="checkbox" className="mr-2" />Refurbished</li>
              <li><input type="checkbox" className="mr-2" />Brand new</li>
              <li><input type="checkbox" className="mr-2" />Old items</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Ratings</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><input type="checkbox" className="mr-2" />⭐⭐⭐⭐⭐</li>
              <li><input type="checkbox" className="mr-2" />⭐⭐⭐⭐</li>
              <li><input type="checkbox" className="mr-2" />⭐⭐⭐</li>
            </ul>
          </div>

        </aside>
        </>
    )
}