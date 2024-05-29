import React from 'react'
import Projectitem from './Projectitem'
import gamerstopImg from '../../assets/gamerstop.jpeg'
import project2Img from '../../assets/project2.jpeg'
import project from '../../assets/project.jpeg'
import project3 from '../../assets/project3.jpeg'

const Projects = () => {
  return (
    <div id='project' className='max-w-[1090px] m-auto md:pl-20 p-4 py-16'>
<h1 className=' py-5 text-4xl font-bold text-left text-blue-950 underline'>Projects</h1>
<p className='text-left py-2 text-2xl text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias illum ad maiores delectus, nisi in itaque expedita, voluptas repudiandae odit animi id nemo dolorem exercitationem dolorum, amet voluptate corporis.</p>
    
    <div className=' grid sm:grid-cols-2 gap-12 '>
      <Projectitem img={gamerstopImg} title='gamerstop site'/>
      <Projectitem img={project2Img} title='project2 site'/>
      <Projectitem img={project} title='project site'/>
      <Projectitem img={project3} title='project3 site'/>
    </div>
    </div>
  )
}

export default Projects