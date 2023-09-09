import React from 'react'
// import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Talk from '@/components/Talk'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import AnimatedBg from '@/components/AnimatedBg'
import About from '@/components/About'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ankit Portfolio',
  description: 'This a portfoli website of Ankit, which displays his skills and projects',
}
 


const page = () => {
  return (
    <div className=''>
      
      <Hero/>
      <About/>
      <Skills/>
      <Talk/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page
