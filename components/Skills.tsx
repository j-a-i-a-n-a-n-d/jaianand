"use client";
import Skills_1 from '@/helpers/Skills_1';
import React from 'react'
import {motion} from "framer-motion";
import { commonMotionProperties } from "../helpers/data";
import { skillData } from '@/helpers/data';

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='flex flex-col h-screen gap-10 md:gap-6 2xl:gap-8 items-center'>
      <motion.div className='uppercase mt-24 tracking-widest text-xl text-[#aaaaaa] shadow-sm shadow-[#878686]' {...commonMotionProperties}>
        Skills</motion.div>
        <motion.div {...commonMotionProperties} className='mx-8 uppercase text-lg tracking-wider text-[#aaaaaa] flex flex-col items-center md:flex-row'><span>My TechStack,&nbsp;</span><strong>but I&apos;m open to Learn&nbsp;</strong> 🚀🚀🚀</motion.div>
      <div  {...commonMotionProperties} className="mx-4 max-w-md flex flex-row gap-4 flex-wrap justify-center items-center overflow-y-hidden overflow-x-hidden">
        {skillData.map((skill) => <Skills_1 key={skill.id} props={skill} />)}
        <motion.div {...commonMotionProperties} className='mt-2 p-4 text-center md:hidden uppercase tracking-wide text-base text-[#aaaaaa] font-bold'>Continuous learner with a dynamic skill ready for impactful contributions.</motion.div>
      </div>
    </div>
  )
}