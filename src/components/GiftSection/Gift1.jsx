export const Gift1=()=>{
    return(
        <>
            

       
        <div className="w-full lg:w-1/4 bg-white p-4 rounded-xl shadow-sm space-y-6">

         
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

         
         
        
          <div className="flex flex-col ">
          <hr></hr>  <select><option>price range</option></select> 
            <hr></hr> <select><option>Condtion</option></select>  <hr></hr>
             <select><option>Rating</option></select>  <hr></hr>
             <select><option>Manufacturer</option></select>

          </div>

         
         

        </div>
        </>
    )
}