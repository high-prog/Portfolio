import React from 'react'
import { motion } from 'framer-motion'
import Skill from '@/components/Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.2
    }}
    className='h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] lg:px-10 min-h-screen justify-center space-y-0 mx-auto items-center relative'>
        
        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl '>Skills</h2>


        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 font-light text-xs '>Hover over a skill for proficiency</h3>

        <div className='grid grid-cols-3 gap-3 p-4 mx-auto'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>



    </motion.div>
  )
}

export default Skills