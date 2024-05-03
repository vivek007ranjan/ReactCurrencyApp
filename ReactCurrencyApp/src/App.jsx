import { useState } from 'react'
import './App.css'
import currencyinfo from './Backend/currencyinfo'
import CardInput from './components/cardInput.jsx'



function App() {

  const [FromAmount, setFromAmount] = useState(0)
  const [ToAmount, SetToAmount] = useState(0)
  const [ToCurrency, setToCurrency] = useState('INR')
  const [FromCurrency, setFromCurrency] = useState('USD')
  const Currencydata = currencyinfo(FromCurrency)
  const currList = Currencydata && Currencydata.rates ? Currencydata.rates : {};


   function calculate() {   
    SetToAmount( Number(FromAmount)* Number(currList[ToCurrency]));
   }

   function Swap(){
    const prevcur= ToCurrency
    setToCurrency(FromCurrency)
    setFromCurrency(prevcur)
  
   }

  

  return (
    <div className="bg-slate-800 h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
      <div>
        <div className=" bg-slate-50 p-8 rounded-lg bg-opacity-50 border-[1px] flex flex-col gap-[11px]">
         <CardInput label ="From"
          Amount ={FromAmount}
          setAmountMeth ={setFromAmount}
          Currency = {FromCurrency}
          setCurrency = {setFromCurrency}
          currencyList = {currList}
          />
          <div className="m-[-22px] z-10 flex justify-center">
            <button className=" bg-blue-600 w-fit border-white border-2 rounded-md p-[4px] text-white "
            onClick={()=>Swap()}>
              SWAP
            </button>
          </div>
          <CardInput label ="To"
          Amount ={ToAmount}
          setAmountMeth ={SetToAmount}
          Currency = {ToCurrency}
          setCurrency = {setToCurrency}
          currencyList = {currList}
          />
          <button className=" bg-blue-600 rounded-md p-[8px] text-white"
          onClick={()=>calculate()}>
            Convert {FromCurrency} to {ToCurrency}
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
