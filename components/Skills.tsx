import React from 'react'
import Skillscard from './Skillscard'
import { FRONTEND , BACKEND, TOOLS} from '@/constants/data'

const Skills = () => {
  
  return (
    <div className='p-24 px-32 mt-8'>
      <h1 className='text-2xl mb-16'><span className='text-emerald-500 text-4xl'>Skills</span> and Tools</h1>
      <div className='flex justify-between gap-5 '>
      {/* <div className='text-center w-[40%] border-[1px] border-emerald-500 rounded-lg bg-stone-950 p-7 '>
        <h1 className='text-2xl pb-6'><span className='text-emerald-500' >Front</span>end</h1>
        <ul className='  child:text-lg  flex child:p-2 flex-wrap items-center justify-center'>
            <li className='text-emerald-500'>React</li>
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>Material Ui</li>
            <li>Shandcn ui</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS</li>
        </ul>
      </div> */}
      <Skillscard {...FRONTEND}/>
      <Skillscard {...BACKEND}/>
      <Skillscard {...TOOLS}/>
      {/* <div>
        <h1 className='text-2xl pb-6'><span className='text-emerald-500' >Back</span>end</h1>
        <ul className='child:py-[5px]  child:text-lg'>
            <li>Express Js</li>
            <li>Node js</li>
            <li>Mongo Db</li>
            <li>Mongoose</li>
            <li>Rest Api</li>
            <li>Prisma</li>
            <li>Socket.io</li>
            <li>Postgres Sql</li>
            <li></li>
        </ul>
      </div> */}
      {/* <div>
        <h1 className='text-2xl pb-6'><span className='text-emerald-500' >Tools</span> & Languages</h1>
        <ul className='child:py-[5px]  child:text-lg'>
            <li>Git</li>
            <li>Postman</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>C/C++</li>
            <li></li>
            
        </ul>
      </div> */}
      </div>

    </div>
  )
}

export default Skills
