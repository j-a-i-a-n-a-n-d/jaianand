"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Hero() {
    const [text] = useTypewriter({
        words: ['Software Engineer.', 'Backend Architect.', 'GenAI Enthusiast.'],
        loop: 0,
        delaySpeed: 2000,
        deleteSpeed: 50
    });

    return (
        <div className="min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-y-auto overflow-x-hidden relative border-none m-0">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start w-full"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-card border border-white/5 text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.15)] mb-6 w-max"
                    >
                        Welcome to my universe
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-[1.1] mb-2 tracking-tighter w-full">
                        Hi, I&apos;m <br className="hidden sm:block lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-burgundy drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">Jai Anand</span>
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-secondary/80 mb-6 h-[40px] md:h-[48px] w-full max-w-full overflow-hidden whitespace-nowrap">
                        A {' '}
                        <span className="text-primary border-b-2 border-burgundy inline-block min-w-[200px]">
                            {text}
                            <Cursor cursorColor='#8b5cf6' cursorBlinking={true} cursorStyle="|" />
                        </span>
                    </h2>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed max-w-md lg:max-w-2xl mx-auto lg:mx-0 mb-8 px-4 lg:px-0"
                    >
                        I specialize in architecting highly scalable backend systems and robust data pipelines. From engineering high-concurrency architectures and optimizing complex databases to orchestrating secure cloud infrastructure and GenAI integrations, my focus is strictly on extreme performance and system reliability.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
                    >
                        <a href="#contact" className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary text-black font-bold text-base sm:text-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
                            Let&apos;s Talk
                        </a>
                        <a href="#projects" className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-card border border-white/10 text-primary font-bold text-base sm:text-lg hover:bg-zinc-800 hover:border-burgundy/50 transition-all duration-300">
                            View Work
                        </a>
                    </motion.div>
                </motion.div>

                {/* Single Image Frame */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm lg:max-w-md relative group mt-8 lg:mt-0 flex shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent to-burgundy rounded-full lg:rounded-[40px] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative aspect-square lg:aspect-[4/5] w-full rounded-full lg:rounded-[40px] overflow-hidden z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(128,0,32,0.4)]">
                        <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl rounded-full lg:rounded-[40px]">
                           <Image 
                               src="/profile.jpg" 
                               alt="Jai Anand"
                               fill
                               style={{ objectFit: 'cover' }}
                               className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                           />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}