"use client";
import Skills_1 from '@/helpers/Skills_1';
import React from 'react'
import {motion} from "framer-motion";
import { commonMotionProperties } from '@/helpers/motion-y';
import { skillData } from '@/helpers/skillData';

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='flex flex-col h-screen gap-24 items-center'>
      <motion.div className='uppercase mt-20 tracking-widest text-xl text-[#aaaaaa]' {...commonMotionProperties}>Skills</motion.div>
      <motion.div  {...commonMotionProperties} className="max-w-md  flex flex-row gap-2 flex-wrap max-h-screen justify-center items-center overflow-y-hidden">
        {skillData.map((skill) => <Skills_1 key={skill.id} props={skill}  />)}
      </motion.div>
    </div>
  )
}