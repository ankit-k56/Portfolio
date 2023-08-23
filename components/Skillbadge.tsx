"use client"
import React from 'react'
import Image from 'next/image'
interface Skills {
    name: string,
    img: string
}

const Skillbadge: React.FC<Skills> = ({name, img}) => {
  return (
    <div className='p-2 flex border-[1px] bg-zinc-950 rounded-xl items-center justify-center'>
      <Image src={img} alt={name} width={25} height={30}></Image>
      {/* <h1>Ima</h1> */}
      <h1>{name}</h1>
    </div>
  )
}

export default Skillbadge
