import { useState } from 'react'
import Nav from './components/nav'
import Bg from './components/Bg'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
     <Bg />
     <Work />
     <Projects />
     <Contact />

    </>
  )
}

export default App
