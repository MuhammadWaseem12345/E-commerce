
export const Project2=()=>{
    return(
        <>
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded shadow-sm">
            <p className="text-sm text-gray-700">
              12,911 items in <span className="font-semibold">Mobile accessory</span>
            </p>
            <div className="flex items-center flex-wrap gap-3 text-sm">
              <label className="flex items-center gap-1 text-gray-600">
                <input type="checkbox" className="accent-blue-500 w-4 h-4" /> Verified only
              </label>
              <select className="border px-2 py-1 rounded text-sm">
                <option>Featured</option>
              </select>
              <div className="flex items-center gap-2 text-gray-500 text-xl">
                <button>🔲</button>
                <button>☰</button>
              </div>
            </div>
          </div>
        </>
    )
}