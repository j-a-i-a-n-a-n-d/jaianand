"use client";
import React from 'react';
import { motion } from "framer-motion";
import { commonMotionProperties, skillData } from '@/helpers/data';
import { 
  SiPython, SiCplusplus, SiJavascript, SiDjango, SiFastapi, SiNodedotjs, 
  SiReact, SiGit, SiGithub, SiDocker, SiMongodb, SiRedis, 
  SiPostgresql, SiApachekafka 
} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';

// Map IDs to React Icons and technology names
const getSkillAsset = (id: number) => {
  switch (id) {
     case 1: return { icon: SiPython, name: "Python" };
     case 2: return { icon: DiSqllite, name: "SQL" };
     case 3: return { icon: SiCplusplus, name: "C++" };
     case 4: return { icon: SiJavascript, name: "JavaScript" };
     case 5: return { icon: SiDjango, name: "Django" };
     case 6: return { icon: SiFastapi, name: "FastAPI" };
     case 7: return { icon: SiNodedotjs, name: "Node.js" };
     case 8: return { icon: SiReact, name: "React" };
     case 9: return { icon: SiGit, name: "Git" };
     case 10: return { icon: SiGithub, name: "GitHub" };
     case 11: return { icon: SiDocker, name: "Docker" };
     case 12: return { icon: VscAzure, name: "Azure" };
     case 13: return { icon: SiRedis, name: "Redis" };
     case 14: return { icon: SiPostgresql, name: "PostgreSQL" };
     case 15: return { icon: SiMongodb, name: "MongoDB" };
     case 16: return { icon: SiApachekafka, name: "Kafka" };
     default: return { icon: SiGit, name: "Tech" };
  }
}

export default function Skills() {
  const topRow = [...skillData.slice(0, 5), ...skillData.slice(0, 5), ...skillData.slice(0, 5), ...skillData.slice(0, 5)];
  const midRow = [...skillData.slice(5, 11), ...skillData.slice(5, 11), ...skillData.slice(5, 11), ...skillData.slice(5, 11)];
  const botRow = [...skillData.slice(11, 16), ...skillData.slice(11, 16), ...skillData.slice(11, 16), ...skillData.slice(11, 16)];

  const renderSkillBoxes = (row: typeof skillData, isReverse = false) => (
    <div className={`flex whitespace-nowrap gap-4 md:gap-6 shrink-0 ${isReverse ? 'animate-marquee-reverse ml-16' : 'animate-marquee'}`}>
      {row.map((skill, index) => {
        const { icon: Icon, name } = getSkillAsset(skill.id);
        return (
          <div 
            key={`${skill.id}-${index}`}
            className="flex flex-col items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-2xl md:rounded-3xl bg-card border border-white/5 hover:border-burgundy/50 transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-[0_0_30px_rgba(128,0,32,0.3)] cursor-pointer group/item"
          >
            <Icon className="text-4xl md:text-6xl text-zinc-400 group-hover/item:text-white transition-colors duration-300 drop-shadow-md mb-2 md:mb-4" />
            <span className="text-xs md:text-sm font-bold text-zinc-500 group-hover/item:text-white transition-colors duration-300 tracking-wide">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[60vh] py-12 overflow-hidden bg-transparent'>
      <motion.div {...commonMotionProperties} className='uppercase tracking-widest text-2xl text-primary font-black mb-12 bg-card/60 px-8 py-3 rounded-xl border border-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(128,0,32,0.3)]'>
        Arsenal
      </motion.div>

      {/* A massive, dense display of skills covering the full width */}
      <div className="relative flex flex-col gap-4 md:gap-6 w-[120vw] -ml-[10vw] overflow-hidden transform -rotate-2">
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-[20vw] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-[20vw] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="relative flex w-full group">{renderSkillBoxes(topRow, false)}</div>
        <div className="relative flex w-full group">{renderSkillBoxes(midRow, true)}</div>
        <div className="relative flex w-full group ml-8">{renderSkillBoxes(botRow, false)}</div>

      </div>
    </div>
  )
}