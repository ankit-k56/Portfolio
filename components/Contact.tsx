import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='p-2 text-center bg-black flex flex-col justify-center items-center' >
      <h1 className='text-2xl sm:text-3xl text-emerald-500 pt-7 p-2'>Contact Me</h1>
      <p className='text-sm px-4 sm:text-base'>If you have any suggestion or complains or wanna talk about your project feel free to ping me</p>
      <div className='text-start flex gap-3 sm:gap-11 w-[80%] justify-center py-16'>
        <div className='w-[45%] sm:w-[35%]'>
            <div className='flex flex-col m-3 '>
                <label htmlFor="name" className='py-2 text-base sm:text-lg'>Name</label>
                <input type="text"  className='bg-stone-700  p-1 ' placeholder='Enter yout name' name='name'/>
            </div>
            <div className='flex flex-col m-3 '>
                <label htmlFor="email" className='py-2 text-base sm:text-lg'>Email</label>
                <input type="text"  className='bg-stone-700  p-1 ' placeholder='Enter your email' name='name'/>
            </div>
            <button className='bg-transparent m-3 hover:bg-emerald-600 transition text-sm sm:text-base px-4 md:px-8  py-3 border-[1px] border-emerald-500'>Contact Me</button>
      </div>
      <div className='flex flex-col m-3 mb-0 '>
        <label htmlFor="name" className='py-2 text-lg'>Message</label>
        {/* <input type="text"  className='bg-stone-700  p-2 ' placeholder='Enter your email' name='name'/> */}
        <textarea name="message" className='bg-stone-700  p-1 hidden sm:block ' id="" cols={30} rows={8}></textarea>
        <textarea name="message" className='bg-stone-700  p-1 block sm:hidden' id="" cols={20} rows={8}></textarea>
      </div>

      </div>
    </div>
  )
}

export default Contact
