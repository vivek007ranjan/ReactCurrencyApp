import React from 'react'

function CardInput({label,Amount,setAmountMeth,Currency,setCurrency,currencyList}) {
  
  return (
    <div className="grid grid-rows-2 grid-cols-2 h-25 w-full bg-white rounded-lg p-4 ">
            {/* Top Row - Labels */}
            <div className="flex justify-start items-start  ">
              <label htmlFor="From" className="text-gray-400 text-sm">{label}</label>
            </div>
            <div className="flex justify-end items-start">
              <label htmlFor="CurrType" className="text-gray-400 text-sm">Currency Type</label>
            </div>

            {/* Bottom Row - Input and Dropdown */}
            <div className="flex justify-start items-end text-sm text-black">
              <input
                type="Number"
                id="InputNum"
                className="border-0 p-2 focus:outline-none"
                placeholder="0"
                value={Amount}
                onChange={(e)=>setAmountMeth(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-end text-sm text-black">
              <select id="currency" className="border-0 p-2 focus:outline-none"
                      value={Currency}
                      onChange={(event)=>setCurrency(event.target.value)}>
                {Object.keys(currencyList).map((key) => (
                 <option key={key} value={key}>
              {key}
            </option>
          ))}
               </select>
            </div>
          </div>
  )
}

export default CardInput