import React, {  useEffect, useState } from 'react'

function currencyinfo(countryCode) {
const [currencyList, setCurrencyList]=useState({});

useEffect(()=>{
  fetch(`https://api.exchangerate-api.com/v4/latest/${countryCode}`)
  .then((response) => response.json())
      .then((data) => setCurrencyList(data));
},[countryCode])
  
  return (
   currencyList
  )
}

export default currencyinfo;