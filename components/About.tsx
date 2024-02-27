"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { commonMotionProperties } from '@/helpers/motion-y';
type Props = {}

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
    return (
        <div className='flex justify-center h-screen'>
            <div className='flex flex-col gap-8 md:gap-20 items-center md:max-w-6xl'>
                <motion.div
                    {...commonMotionProperties}
                    className='mt-24 uppercase tracking-widest text-xl text-[#aaaaaa]'>About Me</motion.div>
                <div className='flex flex-col gap-8 items-center md:flex-row md:justify-around md:gap-16'>
                    <Image
                        src="/about.jpg"
                        width={isSmallScreen ? 175 : 275}
                        height={isSmallScreen ? 175 : 275}
                        alt="About Me"
                        className='rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:hover:shadow-black/30 hover:opacity-80 sm:w-150 sm:h-150' />
                    <div className='flex flex-col gap-6 p-7 items-center md:item-left md:gap-12'>
                        <motion.div {...commonMotionProperties} className='flex-1 uppercase flex-wrap tracking-wider text-lg'>Little Background About Me</motion.div>
                        <div className='flex flex-col gap-8 item-center md:items-start'>
                            <motion.div {...commonMotionProperties} className='text-center tracking-wide'>Final Year B.tech Undergraduate from Graphic Era University. Driven by a strong passion for technology and a desire to constantly scale up and brush up my skills. Having proven skills and exposure to latest tools and technologies with strong CS fundamentals. Aim to create innovative solutions to make an impact in the industry.</motion.div>
                            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }}
                                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, }}>
                                <a
                                href="https://drive.google.com/file/d/18D0YnprLEy4dryyu6Qn8AMOyU1zcffFe/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <button className='bg-[#3e3d3d] hover:bg-[rgb(36,36,36)] text-white font-normal py-2 px-4 rounded-md hover:scale-105 transition duration-300 hover:border-[0.5px] '>View Resume</button>
                                </a></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}