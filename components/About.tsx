"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
type Props = {}

interface CommonMotionProperties {
    initial: { y: number; opacity: number; scale: number };
    whileInView: { y: number; opacity: number; scale: number };
    transition: { duration: number };
}


export default function About({ }: Props) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);

    const commonMotionProperties: CommonMotionProperties = {
        initial: { y: -100, opacity: 0, scale: 0.5 },
        whileInView: { y: 0, opacity: 1, scale: 1 },
        transition: { duration: 0.7 },
    };

    return (
        <div className='flex justify-center h-screen'>
            <div className='flex flex-col gap-8 md:gap-20 items-center md:max-w-6xl'>
                <motion.div
                    {...commonMotionProperties}
                    className='mt-24 uppercase'>About Me</motion.div>
                <div className='flex flex-col gap-8 items-center md:flex-row md:justify-around md:gap-16'>
                    <Image
                        src="/about.jpg"
                        width={isSmallScreen ? 175 : 275}
                        height={isSmallScreen ? 175 : 275}
                        alt="About Me"
                        className='rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:hover:shadow-black/30 hover:opacity-80 sm:w-150 sm:h-150' />
                    <div className='flex flex-col gap-6 p-7 items-center md:item-left md:gap-12'>
                        <motion.div {...commonMotionProperties} className='flex-1 uppercase flex-wrap' >Little Background About Me</motion.div>
                        <div className='flex flex-col gap-8 item-center md:items-start'>
                            <motion.div {...commonMotionProperties} className='text-center'>I am a Final Year Btech Undergraduate from Graphic Era University. I am driven by a strong passion for technology and a desire to constantly improve my skills. I am a quick learner and I am always eager to take on new challenges. My goal is to become a skilled and experienced developer, able to create innovative solutions that make an impact in the industry.</motion.div>
                            <button className='p-2'>View Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}