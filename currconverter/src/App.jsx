import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {

  const [val, setVal] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convAmt, setConvAmt] = useState(0)

  const currInfo = useCurrencyInfo(from)
  const options = Object.keys(currInfo)

  function swapVals(){
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    setConvAmt(val * currInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url('https://images.pexels.com/photos/8370391/pexels-photo-8370391.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      
    </div>
  )
}

export default App