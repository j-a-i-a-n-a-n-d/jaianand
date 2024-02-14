"use client";
import React from 'react'
import { motion } from "framer-motion";
import { commonMotionProperties } from '@/helpers/motion-y';
type Props = {}

export default function Experience({}: Props) {
    return (
        <div className='flex justify-center h-screen'>
            <div className='flex flex-col gap-8 md:gap-20 items-center md:max-w-6xl'>
                <motion.div
                    {...commonMotionProperties}
                    className='mt-24 uppercase'>Experience
                </motion.div>
                <div>Exp</div>
            </div>
        </div>
    )
}