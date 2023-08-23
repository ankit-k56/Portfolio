"use client"
import {useEffect} from 'react'
import React from 'react'
// import {Github} from 'lucide-react'
import { useInView,motion, useAnimate } from 'framer-motion'
import Image from 'next/image';
import { ImGithub } from 'react-icons/Im';
import { AiOutlineLink} from 'react-icons/Ai';

const ProjectCard = () => {
  // const [scope, animate] = useAnimate()
  // const [scope2, animate2] = useAnimate()
  // const isInView = useInView(scope,{ once: false })
//   useEffect(() => {
//     if (isInView) {
//       animate(scope.current, { opacity: 1, x:0 },{ duration: 0.7 })
//       animate2(scope2.current, { opacity: 1, x:0 },{ duration: 0.7 })
//       // console.log("inview")
//     }else{
//       animate(scope.current, { opacity: 0, x:-60 },{ duration: 0.7})
//       animate2(scope2.current, { opacity: 1, x:60 },{ duration: 0.7 })
//     }
//  }, [isInView])
  return (
    <div className='flex  p-20 gap-8'>
      
    <div >
      <div className='flex gap-1'>
      <div className='w-[15px] h-[48px] bg-emerald-500 text-emerald-500'></div>
      <div className='w-[15px] h-[28px] bg-emerald-500 text-emerald-500'></div>
      </div>
      <h1 className='text-3xl py-2 text-emerald-500'>Title of Project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil sit in minima, incidunt molestias quia veniam beatae iste doloremque non qui animi quidem aperiam autem cumque pariatur consequatur blanditiis!
      Fugit, iste, ducimus vero perspiciatis laboriosam nemo expedita atque neque velit sed enim unde itaque saepe voluptatum! Sed, sit eaque! Magni possimus eveniet unde porro illo, inventore quos reprehenderit atque!</p>
      <div className='flex text-2xl gap-3 py-4 child:cursor-pointer '>
      <ImGithub className='hover:text-emerald-500'/>
      <AiOutlineLink className='text-[1.7rem] hover:text-emerald-500'/>
      </div>
      
    </div>
      <Image  width={400} height={80} className='w-[45%]' src={'/stars.jpg'} alt='pic'/>

    </div>
  )
}

export default ProjectCard
