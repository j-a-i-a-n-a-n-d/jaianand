"use client";
import ProjectCard from '@/helpers/ProjectCard';
import React from 'react';
import { motion } from "framer-motion";
import { commonMotionProperties } from '../helpers/data';
const Projects = () => {
    
    return (
        <div className='flex flex-col h-screen gap-2 justify-center items-center'>
            <motion.div {...commonMotionProperties} className='uppercase mt-24 tracking-widest text-lg text-[#aaaaaa]'>Projects</motion.div>
            <div className="pt-6 max-w-6xl  mt-4 flex flex-row gap-4 flex-wrap max-h-screen justify-center items-center overflow-y-auto">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>);
};                    
export default Projects;
