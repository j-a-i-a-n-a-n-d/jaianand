"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { commonMotionProperties, experienceData } from '@/helpers/data';
import { 
  SiAngular, SiSpringboot, SiDocker,
  SiPython, SiApachekafka, SiElixir, SiDjango, SiReact, SiNginx, SiPostgresql
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { VscAzure } from 'react-icons/vsc';
import { DiDatabase } from 'react-icons/di';

// Helper to provide brand-colored icons for skill chips
const getSkillIcon = (skillName: string) => {
    switch (skillName) {
        case "Angular": return <SiAngular className="text-[#DD0031] text-lg mr-1.5" />;
        case "Java": return <FaJava className="text-[#007396] text-lg mr-1.5" />;
        case "Spring Boot": return <SiSpringboot className="text-[#6DB33F] text-lg mr-1.5" />;
        case "Amazon Web Services": return <FaAws className="text-[#FF9900] text-lg mr-1.5" />;
        case "PostgreSQL": return <SiPostgresql className="text-[#4169E1] text-lg mr-1.5" />;
        case "Docker": return <SiDocker className="text-[#2496ED] text-lg mr-1.5" />;
        case "Python": return <SiPython className="text-[#3776AB] text-lg mr-1.5" />;
        case "Apache Kafka": return <SiApachekafka className="text-zinc-300 text-lg mr-1.5" />;
        case "Elixir": return <SiElixir className="text-[#4E2A8E] text-lg mr-1.5" />;
        case "Pinecone": return <DiDatabase className="text-zinc-400 text-lg mr-1.5" />;
        case "GenAI": return <BsRobot className="text-burgundy text-lg mr-1.5" />;
        case "Django": return <SiDjango className="text-[#092E20] text-lg mr-1.5" />;
        case "React": return <SiReact className="text-[#61DAFB] text-lg mr-1.5" />;
        case "Azure": return <VscAzure className="text-[#0078D4] text-lg mr-1.5" />;
        case "Nginx": return <SiNginx className="text-[#009639] text-lg mr-1.5" />;
        default: return <span className="text-secondary/30 text-[10px] mr-1.5">◆</span>;
    }
}

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:max-w-6xl mx-auto py-12">
       <motion.div {...commonMotionProperties} className="uppercase tracking-widest text-2xl text-primary font-black mb-16 bg-card/60 px-8 py-3 rounded-xl border border-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(128,0,32,0.3)] text-center text-center">
           Experience
       </motion.div>
       
       <div className="w-full relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-burgundy/50 before:to-transparent">
           {experienceData.map((exp, index) => (
               <motion.div 
                   key={exp.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
               >
                   <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-burgundy/20 z-10 transition-transform duration-300 group-hover:scale-110">
                       <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]"></div>
                   </div>
                   
                   <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/60 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,0,32,0.2)] hover:border-white/10 group-hover:-translate-y-1">
                       <div className="flex flex-col xl:flex-row justify-between mb-4 xl:items-center">
                           <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                           <span className="text-sm font-semibold text-burgundy whitespace-nowrap mt-1 xl:mt-0">{exp.date}</span>
                       </div>
                       <div className="text-secondary font-medium mb-6 text-sm">{exp.company}</div>
                       
                       <ul className="space-y-3 mb-8">
                           {exp.description.map((bullet, i) => (
                               <li key={i} className="text-secondary/80 text-sm leading-relaxed flex items-start">
                                   <span className="text-accent mr-3 mt-1.5 text-[8px]">■</span>
                                   <span dangerouslySetInnerHTML={{ __html: bullet }} />
                               </li>
                           ))}
                       </ul>
                       
                       <div className="flex flex-wrap gap-3 pt-2">
                           {exp.skills.map(skill => (
                               <div key={skill} className="flex items-center px-3 py-1.5 bg-zinc-900/90 rounded-full text-xs font-semibold text-zinc-300 border border-white/5 shadow-inner">
                                   {getSkillIcon(skill)}
                                   {skill}
                               </div>
                           ))}
                       </div>
                   </div>
               </motion.div>
           ))}
       </div>
    </div>
  );
}
