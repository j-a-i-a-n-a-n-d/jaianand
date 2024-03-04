"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { commonMotionProperties } from '../helpers/data';
import { SocialIcon } from 'react-social-icons';
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
            <div className='flex flex-col gap-16 md:gap-18 2xl:gap-32 items-center md:max-w-6xl'>
                <motion.div
                    {...commonMotionProperties}
                    className='mt-24 uppercase tracking-widest text-xl text-[#aaaaaa] shadow-sm shadow-[#878686]'>About Me</motion.div>
                <div className='flex flex-col gap-8 items-center md:flex-row md:justify-around md:gap-16'>
                    <Image
                        src="/jaiabout.jpeg"
                        width={isSmallScreen ? 175 : 275}
                        height={isSmallScreen ? 175 : 275}
                        alt="About Me"
                        className='rounded-2xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:opacity-90 md:hover:-rotate-12 sm:w-150 sm:h-150 hover:shadow-[#878686]' />
                    <div className='flex flex-col gap-3 px-9 items-center md:item-left md:gap-12'>
                        <div  className='flex-1 uppercase flex-wrap tracking-wider text-lg'>Little Background About Me</div>
                        <div className='flex flex-col gap-8 item-center md:items-start'>
                            <div className='text-center md:text-justify tracking-wide text-sm md:text-base'>B.tech Undergraduate from Graphic Era University. Driven by strong passion for technology and desire to constantly scale up and brush up my skills. Having proven skills & exposure to latest tools and tech with strong CS fundamentals. Aim to create innovative solutions to make an impact in the industry.</div>
                            <div  className='w-full flex flex-col md:flex-row justify-between items-center gap-6'>
                                <motion.div {...commonMotionProperties}>
                                    <a
                                        href="https://drive.google.com/file/d/18D0YnprLEy4dryyu6Qn8AMOyU1zcffFe/view?usp=sharing"
                                        target=""
                                        rel="noopener noreferrer">
                                        <button className='bg-[#3e3d3d] hover:bg-[rgb(36,36,36)] text-white font-normal py-2 px-4 rounded-md hover:scale-110 transition duration-300 hover:border-[0.5px] '>View Resume</button>
                                    </a>
                                </motion.div>
                                <div className='flex gap-1 md:gap-4'>
                                    <SocialIcon target="_blank" className="hover:scale-125 hover:shadow-md hover:rounded-full transition duration-200" bgColor="transparent" fgColor="gray" url='https://www.instagram.com/j_a_i_a_n_a_n_d/'/>
                                    <SocialIcon target="_blank" className="hover:scale-125 hover:shadow-md hover:rounded-full transition duration-200" bgColor="transparent" fgColor="gray" url='https://open.spotify.com/user/jaianand' />
                                    <SocialIcon target="_blank" className="hover:scale-125 hover:shadow-md hover:rounded-full transition duration-200" bgColor="transparent" fgColor="gray" url='https://stackoverflow.com/users/17810807/devvie' />
                                    <SocialIcon target="_blank" className="hover:scale-125 hover:shadow-md hover:rounded-full transition duration-200" bgColor="transparent" fgColor="gray "url='https://medium.com/@jaianand5789' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}