import React, { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const App = () => {
  const [expand, setExpand] = useState(false)

  const toggleAccordion = () => {
    setExpand(!expand)
  }

  return (
    <div className='w-[600px] border border-dashed border-[#0d3332] mx-auto mt-10'>

      <div onClick={toggleAccordion} className='p-4 cursor-pointer pr-16 relative select-none'>
        <h3 className='font-bold text-xl'>"Why do we fall?" (from Batman Begins)</h3>

        <div className={`w-[17px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-10 transition-transform duration-300 rounded-sm ${expand ? 'rotate-90' : ''}`}></div>
        <div className='w-[17px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-20 rounded-sm'></div>
      </div>

      <SlideDown className={'my-dropdown-slidedown'}>
        {expand && (
          <div className='p-4 text-lg'>
            "So that we can learn to pick ourselves up." <br />
            This dialogue reflects the central theme of resilience and self-growth in the Batman saga, emphasizing the importance of perseverance in the face of adversity.
          </div>
        )}
      </SlideDown>
    </div>
  )
}

export default App