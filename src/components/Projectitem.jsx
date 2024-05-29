import React from 'react'

const Projectitem = ({img, title}) => {
  return (
    <div className=' shadow-xl shadow-gray-400  border rounded-xl  transition-all duration-700 hover:scale-110'>
      <img src= {img} alt="" className='rounded-xl' />
      
    </div>
  )
}

export default Projectitem