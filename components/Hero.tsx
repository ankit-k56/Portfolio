import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="">
      <Navbar/>
    <div className="w-full h-full flex   items-center pt-40 pl-52  pb-36">
    <div className='text-4xl font-medium space-y-6'>
      <h1>Hello,</h1>
      <h1>I am <span className='text-emerald-500'>Ankit,</span></h1>
      <h1>Full Stack Web Developer</h1>
      <p className='text-base font-normal text-zinc-500'>Currently located in India In, I make things for Web</p>

      <button className='bg-transparent text-lg px-12  py-4 border-[1px] border-emerald-500'>Let's get in touch!</button>
    </div>
    </div>
    </div>

  )
}

export default Hero
