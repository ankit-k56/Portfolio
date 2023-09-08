"use client"
import {useEffect} from 'react'
import React from 'react'
// import {Github} from 'lucide-react'
import Link from 'next/link'
import { useInView,motion, useAnimate } from 'framer-motion'
import Image from 'next/image';
import { ImGithub } from 'react-icons/Im';
import { AiOutlineLink} from 'react-icons/Ai';
interface Project{
  title : string,
  description: string,
  github: string,
  link : string,
  image: string
}

const ProjectCard : React.FC<Project>= ({title,description,github,link,image}) => {
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
    <div className='flex flex-col-reverse  border-[1px] bg-zinc-950 rounded-xl sm:flex-row  p-8 md:p-12 lg:p-20 gap-4 sm:gap-8'>
      
    <div className='flex justify-between flex-col'>
      <div>
      <h1 className='text-2xl md:text-3xl py-2 text-emerald-500'>{title}</h1>
      <p className='text-base '>{description}</p>
      </div>
      
      <div className='flex text-2xl gap-3 py-4 child:cursor-pointer '>
        <Link href={github}>
          <ImGithub className='hover:text-emerald-500'/>
        </Link>
        <Link href={link}>
          <AiOutlineLink className='text-[1.7rem] hover:text-emerald-500'/>
        </Link>
      </div>
      
    </div>
      <Image  width={400} height={140} className='w-full sm:w-[45%] md:h-[300px] object-cover ' src={image} alt='pic'/>

    </div>
  )
}

export default ProjectCard
