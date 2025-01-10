import React, { useState } from 'react'

const App = () => {
  const [expand, setExpand] = useState(false)

  const toggleAccordion = () => {
    setExpand(!expand)
  }

  return (
    <div className='w-[600px] border border-dashed border-[#0d3332] mx-auto'>

      <div onClick={toggleAccordion} className='p-4 cursor-pointer pr-16 relative select-none'>
        <h3 className='font-bold text-xl'>"Do or do not. There is no try." (from Star Wars)</h3>

        <div className={`w-[17px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-10 transition-transform duration-300 rounded-sm ${expand ? 'rotate-90' : ''}`}></div>
        <div className='w-[17px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-20 rounded-sm'></div>
      </div>

      {expand && (
        <div className='p-4 text-lg'>
          This iconic line by Yoda means that success requires complete commitment. Half-hearted attempts or excuses won’t lead to mastery or results. Yoda is teaching Luke the importance of belief in oneself and the focus required to achieve greatness.
        </div>
      )}
    </div>
  )
}

export default App