import React from 'react'

const Wotkitems = ({year, title, duration , details}) => {
  return (
    
    <ol className='  flex flex-col md:flex-row relative border-l border-stone-200 '>
      <li className='mb-10 ml-4 '>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'  />
        <p className=' flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm  '>
          <span className=' inline-block px-2 py-1 font-semibold text-white bg-blue-950 rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-blue-900 '>{title}</span>
          <span className=' my-1 font-normal leading-none text-stone-400'>{duration}</span>
          
        </p>
        <p className=' text-2xl my-2  font-normal text-stone-500'>{details}</p>
      </li>
    </ol>
  )
}

export default Wotkitems