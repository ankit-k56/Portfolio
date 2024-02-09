import React from 'react'
import Skillscard from './Skillscard'
import { FRONTEND , BACKEND, TOOLS} from '@/constants/data'

const Skills = () => {
  
  return (
    <div className='p-14 sm:p-24 flex items-center justify-center lg:px-32 bg-[#151516]  '>
      <div className='max-w-[2000px]'>
      <h1 className='text-2xl mb-16'><span className='text-emerald-500 text-4xl'>Skills</span> and Tools</h1>
      <div className='flex flex-wrap  justify-around items-center gap-5  '>

      <div>

      <Skillscard {...FRONTEND}/>
      </div>
      <div>

      <Skillscard {...BACKEND}/>
      </div>
      <div>

      <Skillscard {...TOOLS}/>
      </div>
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

    </div>
  )
}

export default Skills
