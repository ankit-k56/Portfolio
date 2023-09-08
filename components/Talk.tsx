import React from 'react'
import Link from 'next/link'

const Talk = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center bg-black text-center  sm:p-20 lg:p-44 py-24 sm:py-44 justify-between'>
      <h1 className='leading-snug w-[50%] text-4xl lg:text-6xl my-10 font-semibold'>Let's talk about your project</h1>
      <Link href={"#contact"}>

        <button className='bg-transparent text-lg px-12 lg:px-20  py-4 border-[1px] border-emerald-500'>Contact Me</button>
      </Link>
    </div>
  )
}

export default Talk
