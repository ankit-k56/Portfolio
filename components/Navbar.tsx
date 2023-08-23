import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-[1200px] mx-auto p-6 '>
      <h1 className='text-2xl'>ankitkumar19041@gmail<span className='text-emerald-500'>.com</span></h1>
      <div className='flex text-xl space-x-16 '>
        <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>01.</span>About</p>
        <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>02.</span>Projects</p>
        <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>03.</span>Contact</p>
      </div>
    </div>
  )
}

export default Navbar
