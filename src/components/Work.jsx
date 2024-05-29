import React from 'react'
import Wotkitems from './Wotkitems'

const data = [
    {
        year: 2024,
        title: 'Microsoft',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente vero quia a voluptatem. Atque expedita cum fugiat voluptatibus nemo',
    },
    {
        year: 2020,
        title: 'Google',
        duration: '4 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente vero quia a voluptatem. Atque expedita cum fugiat voluptatibus nemo',
    },
    {
        year: 2015,
        title: 'Facebook',
        duration: '5 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente vero quia a voluptatem. Atque expedita cum fugiat voluptatibus nemo',
    },

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1090px] m-auto md:pl-20 py-16'>
<h1 className='text-4xl font-bold text-left py-5 text-blue-950 underline'>Work</h1>
{data.map((item, idx) => (
<Wotkitems
 key={idx} 
 year={item.year} 
 title={item.title} 
 duration={item.duration} 
 details={item.details} />
))}
    </div>
  )
}

export default Work;