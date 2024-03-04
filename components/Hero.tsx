"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import "../components/animation/ping.css";
import { motion } from "framer-motion";
import { commonMotionProperties } from '../helpers/data';
type Props = {}

export default function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: ['Hi! I am Jai Anand👋', 'Full Stack Developer','GenAI Enthusiast', 'Py ❤️'],
        loop: 0,
        delaySpeed: 1000,
        deleteSpeed: 150
    })
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='relative m-7'>
                <Image
                    src="/profile.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className='rounded-full' />
                <div className='ping-animation'></div>
                <div className='ping-animation-2'></div>
            </div>
            <motion.div {...commonMotionProperties} className='uppercase tracking-widest text-lg text-[#aaaaaa]'>SOFTWARE ENGINEER</motion.div>
            <div className='text-center'>
                {text}
                <Cursor
                    cursorColor='red'
                    cursorBlinking={true}
                    cursorStyle="|"
                    />
            </div>
        </div>
    )
}