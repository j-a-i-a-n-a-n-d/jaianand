"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <header className='fixed top-0 w-full px-8 py-4 z-50 flex justify-center backdrop-blur-md bg-background/80 border-b border-white/5 transition-all duration-300'>
            <div className='flex items-center justify-between w-full max-w-7xl'>
                
                {/* Navigation Links */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='hidden md:flex flex-row gap-8 items-center text-sm font-medium tracking-wide text-secondary uppercase'>
                    <Link href="#about" className='hover:text-accent hover:scale-105 transition duration-300'>About</Link>
                    <Link href="#experience" className='hover:text-accent hover:scale-105 transition duration-300'>Experience</Link>
                    <Link href="#skills" className='hover:text-accent hover:scale-105 transition duration-300'>Skills</Link>
                    <Link href="#projects" className='hover:text-accent hover:scale-105 transition duration-300'>Projects</Link>
                    <Link href="/blogs" className='hover:text-accent hover:scale-105 transition duration-300'>Blogs</Link>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex justify-end gap-1'>
                    <SocialIcon target="_blank" url="https://www.leetcode.com/anand_jai/" fgColor="currentColor" bgColor="transparent" className='text-secondary hover:text-accent hover:scale-110 transition duration-300' style={{ height: 42, width: 42 }} />
                    <SocialIcon target="_blank" url="https://www.github.com/j-a-i-a-n-a-n-d/" fgColor="currentColor" bgColor="transparent" className='text-secondary hover:text-accent hover:scale-110 transition duration-300' style={{ height: 42, width: 42 }} />
                    <SocialIcon target="_blank" url='https://www.linkedin.com/in/jaiiianand/' fgColor="currentColor" bgColor="transparent" className='text-secondary hover:text-accent hover:scale-110 transition duration-300' style={{ height: 42, width: 42 }} />
                    <SocialIcon target="_blank" url='mailto:jaianand5789@gmail.com' fgColor="currentColor" bgColor="transparent" className='text-secondary hover:text-accent hover:scale-110 transition duration-300' style={{ height: 42, width: 42 }} />
                    <SocialIcon target="_blank" url='https://www.twitter.com/jaianand5789/' fgColor="currentColor" bgColor="transparent" className='text-secondary hover:text-accent hover:scale-110 transition duration-300' style={{ height: 42, width: 42 }} />
                </motion.div>
            </div>
        </header>
    )
}
