import React from 'react'

const Contact = () => {
  return (
    <div className='p-8 text-center bg-black flex flex-col justify-center items-center' >
      <h1 className='text-5xl text-emerald-500 p-2'>Contact Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ducimus minima iusto ea laborum beatae voluptates </p>
      <div className='text-start flex gap-11 w-[80%] justify-center py-20'>
        <div className='w-[40%]'>
            <div className='flex flex-col m-5 '>
                <label htmlFor="name" className='py-2 text-xl'>Name</label>
                <input type="text"  className='bg-stone-700  p-2 ' placeholder='Enter yout name' name='name'/>
            </div>
            <div className='flex flex-col m-5 '>
                <label htmlFor="email" className='py-2 text-xl'>Email</label>
                <input type="text"  className='bg-stone-700  p-2 ' placeholder='Enter your email' name='name'/>
            </div>
      </div>
      <div className='flex flex-col m-5 '>
        <label htmlFor="name" className='py-2 text-xl'>Message</label>
        {/* <input type="text"  className='bg-stone-700  p-2 ' placeholder='Enter your email' name='name'/> */}
        <textarea name="message" className='bg-stone-700  p-2 ' id="" cols={30} rows={10}></textarea>
      </div>

      </div>
    </div>
  )
}

export default Contact
