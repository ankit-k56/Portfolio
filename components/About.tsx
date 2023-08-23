"use client"
import {useEffect} from 'react'
import React from 'react'
import Image from 'next/image'
import { useInView,motion, useAnimate } from 'framer-motion'

const About = () => {
  const [scope, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const isInView = useInView(scope,{ once: false })
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, x:0, y:0 },{ duration: 1 })
      animate2(scope2.current, { opacity: 1, x:0, y:0 },{ duration: 1 })
      // console.log("inview")
    }else{
      animate(scope.current, { opacity: 0, x:-200 , y:-40},{ duration: 0.1})
      animate2(scope2.current, { opacity: 0, x:100, y:-40 },{ duration: 0.1 })
    }
 }, [isInView])
  return (
  
    <div className='flex p-28 ' >

      <Image  ref={scope} className='rounded-full  mx-8 object-cover items-center' src={'/stars.jpg'} alt='me' width={280} height={360}></Image>
      <div  ref={scope2}>
        <h1 className='text-3xl pb-5 font-semibold text-emerald-500'>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi omnis reprehenderit, quibusdam autem illum harum. Beatae, cumque saepe voluptatum at quis modi aperiam in nemo ex, molestias, odit omnis.
        Facilis dolores ratione mollitia doloremque molestiae ducimus nostrum explicabo aliquam dolore maiores voluptas voluptatum molestias, soluta totam aspernatur omnis aliquid exercitationem unde doloribus tempora nemo. Consectetur autem voluptatem veritatis debitis.</p>
      <div>
      <button className='hover:bg-transparent my-3 text-lg px-12  py-3 bg-emerald-600 transition border-[1px] border-emerald-500'>Resume</button>
        </div>
      </div>
    </div>
   
  )
}

export default About
