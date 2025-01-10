import React, { useState } from 'react'

const App = () => {
  const [expand, setExpand] = useState(false)

  const toggleAccordion = () => {
    setExpand(!expand)
  }

  return (
    <div className='h-screen bg-[#eaebe6] text-[#0d3332] pt-20'>
      <div className='w-[600px] border border-dashed border-[#0d3332] mx-auto'>
        
        <div className='p-4 cursor-pointer pr-16 relative' onClick={toggleAccordion}>
          <h3 className='font-bold text-xl'>Lorem ipsum dolor sit amet.</h3>

          <div className={`w-[15px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-10 transition-transform duration-300 ${expand ? 'rotate-90' : ''}`}></div>
          <div className='w-[15px] h-1 bg-[#0d3332] absolute right-4 top-[50%] translate-x-[-50%] z-20'></div>
        </div>

        {expand && (
          <div className='p-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque expedita tempore fugiat quibusdam, voluptas quas earum veniam blanditiis sapiente, eos libero, delectus molestiae error mollitia dolorem deserunt! Magnam, quos illo minima dolores quaerat provident qui accusantium amet ut in dolore magni beatae culpa autem minus? Dolore accusantium atque illo facilis?
          </div>
        )}
      </div>
    </div>
  )
}

export default App