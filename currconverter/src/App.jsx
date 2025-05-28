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
          <form onSubmit={(e) => e.preventDefault() && convert()}>
              <div className='w-full mb-1'>
                <InputBox label='from' amount={val} currOptions={options} onCurrChange={(c) => setFrom(c)} onAmountChange={(amt) => setVal(amt)} />
              </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App