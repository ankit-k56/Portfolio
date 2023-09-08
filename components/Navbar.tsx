import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-[1200px] mx-auto p-6 '>
      <h1 className='text-2xl hidden md:block'>ankitkumar19041@gmail<span className='text-emerald-500'>.com</span></h1>
      <div className='flex text-lg space-x-10 md:text-xl sm:space-x-16 '>
        <Link href={'#about'}>
          <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>01.</span>About</p>
        </Link>
        <Link href={'#projects'}>
          <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>02.</span>Projects</p>
        </Link>
        <Link href={'#contact'}>
          <p className='hover:text-emerald-500 cursor-pointer'><span className='text-emerald-500'>03.</span>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
