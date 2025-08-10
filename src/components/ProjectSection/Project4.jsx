
export const Project4=()=>{
    return(
        <>
           
          <div className="flex justify-end items-center pt-4">
          
            <div className="flex items-center gap-1 text-sm">
              <select className="border px-2 py-1 rounded">
                <option>Show 10</option>
                <option>Show 20</option>
              </select>
              <button className="px-2 py-1 rounded hover:bg-gray-200">1</button>
              <button className="px-2 py-1 rounded hover:bg-gray-200">2</button>
              <button className="px-2 py-1 rounded hover:bg-gray-200">3</button>
              <button className="px-2 py-1 rounded hover:bg-gray-200">&gt;</button>
            </div>
          </div>
        </>
    )
}