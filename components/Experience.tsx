"use client";
import React from 'react'
import { motion } from "framer-motion";
import { commonMotionProperties } from '@/helpers/motion-y';
import Card from '@/helpers/Card';
type Props = {}

export default function Experience({}: Props) {
    return (
            <div className='h-screen flex relativecd b overlow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
                <motion.div
                    {...commonMotionProperties}
                    className='absolute top-24 uppercase'>Experience
                </motion.div>
                <Card/>
            </div>
    )
}