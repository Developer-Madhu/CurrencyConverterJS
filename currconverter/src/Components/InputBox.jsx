import React from 'react'

const InputBox = ({ label, amount, onAmountChange, onCurrChange, currOptions = [], selectedCurr = 'usd', disableAmt = false, currencyDisabled = false, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className='w-1/2'>
        <label className='text-black/40 mb-2 inline-block'>{label}</label>
        <input type="number" className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={disableAmt} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select className="ouline-none rounded-lg px-1 py-1 bg-gray-100 cursor-pointer" onChange={(e) => onCurrChange && onCurrChange(e.target.value)} value={selectedCurr}>
          {currOptions.map((currency) => (
            <option value={currency} key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox