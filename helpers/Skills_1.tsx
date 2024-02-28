"use client"
import React from 'react';
import { useState } from 'react';
import skillDataProperties from './skillDataProperties';
import { motion } from "framer-motion";
import { commonMotionProperties } from './motion-y';

type Props = {
  props: skillDataProperties;
}

function Skills_1({ props }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (<motion.div
    className='relative hover:scale-110 transition duration-300'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img
      src={props.image_id}
      className='cursor-pointer flex-shrink-0 text-2xl w-24 h-24 object-contain rounded-full border'
    />
    {isHovered && (
      <div className='absolute top-0 left-0 bg-white rounded-full opacity-90 w-24 h-24 flex justify-center items-center cursor-pointer text-black text-2xl'>
        <span className='text-3xl text-black font-black '>{props.proficiency}</span>%
      </div>
    )}
  </motion.div>
  )
}

export default Skills_1