import React from 'react'
// import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Talk from '@/components/Talk'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import About from '@/components/About'

const page = () => {
  return (
    <div className=''>
      
      <Hero/>
      <Skills/>
      <Talk/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page
