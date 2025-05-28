import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './Components/InputBox'

const App = () => {

  const [val, setVal] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convAmt, setConvAmt] = useState(0)

  const currInfo = useCurrencyInfo(from)
  const options = Object.keys(currInfo)

  function swapVals() {
    setFrom(to)
    setConvAmt(val)
    setTo(from)
    setVal(convAmt)
  }

  const convert = () => {
    setConvAmt(val * currInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://images.pexels.com/photos/8370391/pexels-photo-8370391.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => e.preventDefault()}>
              <div className='w-full mb-1'>
                <InputBox label='from' amount={val} currOptions={options} onCurrChange={(c) => setFrom(c)} onAmountChange={(amt) => setVal(amt)} className='bg-white p-3 rounded-md' />
              </div>
              <div className='relative w-full h-0.5'>
                <button className='left-1/2 absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swapVals}>Swap</button>
              </div>
              <div className='w-full mb-1'>
                <InputBox label='to' amount={convAmt} selectedCurr={to} currOptions={options} disableAmt={true} onCurrChange={(c) => setTo(c)} onAmountChange={(amt) => setVal(amt)} className='bg-white p-3 rounded-md' />
              </div>
              <button type='submit' onClick={convert} className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App