"use client";
import ProjectCard from '@/helpers/ProjectCard';
import React from 'react';
import { motion } from "framer-motion";
import { commonMotionProperties, projectData } from '@/helpers/data';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full px-4 md:max-w-7xl mx-auto py-12'>
            <motion.div {...commonMotionProperties} className="uppercase tracking-widest text-2xl text-primary font-black mb-16 bg-card/60 px-8 py-3 rounded-xl border border-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(128,0,32,0.3)] text-center">
                Featured Projects
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-items-center">
                {projectData.map((data, index) => (
                    <motion.div
                        key={data.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard props={data} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};                    
export default Projects;
