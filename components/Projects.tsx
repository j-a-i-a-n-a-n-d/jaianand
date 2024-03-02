"use client";
import ProjectCard from '@/helpers/ProjectCard';
import React from 'react';
import { motion } from "framer-motion";
import { commonMotionProperties } from '../helpers/data';
import { projectData } from "../helpers/data";
const Projects = () => {
    
    return (
        <div className='flex flex-col h-screen gap-2 justify-center items-center'>
            <motion.div {...commonMotionProperties} className='uppercase mt-24 tracking-widest text-xl text-[#aaaaaa] shadow-sm shadow-[#878686] '>Projects</motion.div>
            <div className="p-6 max-w-4xl  mt-4 flex flex-row gap-12 flex-wrap max-h-screen justify-center items-center overflow-y-auto">
                {projectData.map((data) => <ProjectCard key={data.id} props={data} />)}
            </div>
        </div>);
};                    
export default Projects;
