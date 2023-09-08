"use client"
import React from 'react'
import Image from 'next/image'
interface Skills {
    name: string,
    img: string
}

const Skillbadge: React.FC<Skills> = ({name, img}) => {
  return (
    <div className='p-[6px] lg:p-2 flex border-[1px] bg-zinc-950 rounded-xl items-center justify-center'>
      <Image src={img} alt={name} width={25} height={30} className='lg:w-[25px] w-[20px]'></Image>
      <h1 className='text-base lg:text-lg'>{name}</h1>
    </div>
  )
}

export default Skillbadge
