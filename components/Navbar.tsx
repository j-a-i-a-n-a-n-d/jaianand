"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import  Link   from 'next/link';
import { motion }  from "framer-motion";
type Props = {}

function Navbar({}: Props) {
    return (
        <header className='sticky top-0 px-8 py-3 z-999 flex justify-center bg-[rgb(38,38,38)] text-[rgb(255,255,255)]'>
        <div className='flex-1 justify-end md:flex md:flex-row md:items-center md:justify-between md:max-w-7xl'>
            <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{duration:0.7,}}
                    className='hidden text-gray-300 md:flex md:flex-row md:gap-10 md:justify-around'>
                    <Link href="#about" className='text-lg hover:text-[#d5ca00] hover:scale-125 hover:shadow-md transition duration-200'>About Me</Link>
                    <Link href="#skills" className='text-lg hover:text-[#d5ca00] hover:scale-125 hover:shadow-md transition duration-200'>Skills</Link>
                    <Link href="#projects" className='text-lg hover:text-[#d5ca00] hover:scale-125 hover:shadow-md transition duration-200'>Projects</Link>
                    <Link href="#contact" className='text-lg hover:text-[#d5ca00] hover:scale-125 hover:shadow-md transition duration-200'>Contact Me</Link>
            </motion.div>
            <motion.div
                    initial={{ y: -500, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{duration:0.7,}}
                    className='flex justify-end'>
                    <SocialIcon url="https://www.leetcode.com/anand_jai/" fgColor="gray" bgColor="transparent" className='hover:scale-150 hover:shadow-md hover:rounded-full transition duration-200' />
                    <SocialIcon url="https://www.github.com/j-a-i-a-n-a-n-d/" fgColor="gray" bgColor="transparent" className='hover:scale-150 hover:shadow-md hover:rounded-full transition duration-200'/>
                    <SocialIcon url='https://www.linkedin.com/in/jaiiianand/' fgColor="gray" bgColor="transparent" className='hover:scale-150 hover:shadow-md hover:rounded-full transition duration-200'/>
                    <SocialIcon url='https://www.instagram.com/j_a_i_a_n_a_n_d/' fgColor="gray" bgColor="transparent" className='hover:scale-150 hover:shadow-md hover:rounded-full transition duration-200'/>
                    <SocialIcon url='https://www.twitter.com/jaianand5789/' fgColor="gray" bgColor="transparent" className='hover:scale-150 hover:shadow-md hover:rounded-full transition duration-200' />
            </motion.div>
        </div>
        </header>
        
    )
}

export default Navbar

