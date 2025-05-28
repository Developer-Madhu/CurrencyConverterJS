import React, { useState } from 'react'

const App = () => {

  const [val, setVal] = useState(null)

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url('https://images.pexels.com/photos/8370391/pexels-photo-8370391.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      
    </div>
  )
}

export default App